import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import Clipboard from 'clipboard';

import { Command } from './command';
import { CommandService } from '../../shared/command.service';
import { ICommandInputParams } from './command-input-holder-generator';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: [ './command.component.scss' ]
})

export class CommandComponent implements OnInit {
  command: Command;
  histories: ICommandInputParams[];
  visibleHistory = false;

  constructor(
    private commandService: CommandService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.command = this.commandService.find(params['name']);
      this.histories = this.loadHistories();
    });

    const cb = new Clipboard('.copy-button', {
      text: () => this.command.sentence
    });

    cb.on('success', () => {
      this.saveHistories();
    });
  }

  hasHistory(): boolean {
    return this.histories.length > 0;
  }

  toggleHistory(): void {
    this.visibleHistory = !this.visibleHistory;
  }

  private loadHistories(): ICommandInputParams[] {
    const h: string = localStorage.getItem(`${this.command.name}_histories`);
    return h ? JSON.parse(h) : [];
  }

  private saveHistories(): void {
    this.histories.push(this.command.toObject());
    localStorage.setItem(`${this.command.name}_histories`, JSON.stringify(this.histories));
  }
}
