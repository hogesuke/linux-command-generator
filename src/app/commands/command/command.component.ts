import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import Clipboard from 'clipboard';

import { Command } from './command';
import { CommandService } from '../shared/command.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: [ './command.component.scss' ]
})

export class CommandComponent implements OnInit {
  command: Command;

  constructor(
    private commandService: CommandService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.command = this.commandService.getCommand(params['name']);
    });

    new Clipboard('.copy-button', {
      text: () => this.command.sentence
    });
  }
}
