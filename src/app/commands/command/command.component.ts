import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import Clipboard from 'clipboard';

import { Command } from './command';
import { CommandService } from '../shared/command.service';
import { CommandGenerator, ICommandParams } from './command-generator';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: [ './command.component.scss' ]
})

export class CommandComponent implements OnInit {
  command: Command;
  histories: Command[];

  constructor(
    private commandService: CommandService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.command = this.commandService.find(params['name']);

      this.histories = this.getHistoryCommands();
    });

    const cb = new Clipboard('.copy-button', {
      text: () => this.command.sentence
    });

    cb.on('success', () => {
      this.histories.push(CommandGenerator.generate(this.command.toObject()));
      localStorage.setItem(`${this.command.name}_histories`, JSON.stringify(this.histories.map(a => a.toObject())));
    });
  }

  private getHistoryCommands(): Command[] {
    const h: string = localStorage.getItem(`${this.command.name}_histories`);
    const paramsArray: ICommandParams[] = h ? JSON.parse(h) : [];
    return CommandGenerator.generateAll(paramsArray);
  }
}
