import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import Clipboard from 'clipboard';
import _ from 'lodash';

import { Command } from './command';
import { CommandService } from '../../shared/command.service';
import { ICommandInputParams } from './command-input-holder-generator';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: [ './command.component.scss' ]
})

export class CommandComponent implements OnInit, AfterViewInit {
  command: Command;
  histories: ICommandInputParams[];
  visibleHistory: boolean;
  private _el: HTMLElement;
  private grammarOffsetTop: number;

  constructor(
    private commandService: CommandService,
    private route: ActivatedRoute,
    private el: ElementRef
  ) {
    this._el = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.command = this.commandService.find(params['name']);
      this.histories = this.loadHistories();
      this.visibleHistory = this.loadVisibleHistoryStatus();
    });

    const cb = new Clipboard('.copy-button', { text: () => this.command.sentence });

    cb.on('success', () => {
      this.addHistory(this.command.toObject());
      this.saveHistories();
    });
  }

  ngAfterViewInit(): void {
    const grammar: HTMLElement = <HTMLElement>this._el.querySelector('#grammar');
    this.grammarOffsetTop = grammar.offsetTop;
  }

  isGrammarFixed(): boolean {
    return this.grammarOffsetTop < this.commandService.mainScrollTop;
  }

  hasHistory(): boolean {
    return this.histories.length > 0;
  }

  toggleHistory(): void {
    this.visibleHistory = !this.visibleHistory;
    this.saveHistory();
  }

  applyHistory(history: ICommandInputParams): void {
    this.command.clear();

    history.args.forEach(arg => {
      const target = this.command.args.find(a => a.name === arg.name);
      target.input = arg.input;
    });

    history.options.forEach(op => {
      const target = this.command.options.find(a => a.name === op.name);

      if (op.argument) {
        target.argument.input = op.argument.input;
      }

      this.command.optionHolder.push(target);
    });
  }

  addHistory(history: ICommandInputParams): void {
    this.histories.splice(0, 0, history);

    if (this.histories.length > 10) {
      this.histories = this.histories.slice(0, 10);
    }
  }

  removeHistory(history: ICommandInputParams): void {
    _.pull(this.histories, history);
    this.saveHistories();
  }

  private loadHistories(): ICommandInputParams[] {
    const h: string = localStorage.getItem(`${this.command.name}_histories`);
    return h ? JSON.parse(h) : [];
  }

  private saveHistories(): void {
    localStorage.setItem(`${this.command.name}_histories`, JSON.stringify(this.histories));
  }

  private loadVisibleHistoryStatus(): boolean {
    const a: string = localStorage.getItem('visible_history');
    return a ? JSON.parse(a) : false;
  }

  private saveHistory(): void {
    localStorage.setItem('visible_history', JSON.stringify(this.visibleHistory));
  }
}
