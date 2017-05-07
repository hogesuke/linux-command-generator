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
      this.command = this.commandService.find(params['name']);
    });

    const cb = new Clipboard('.copy-button', {
      text: () => this.command.sentence
    });

    cb.on('success', () => {
      const h: string = localStorage.getItem(`${this.command.name}_histories`);
      const histories: Object[] = h ? JSON.parse(h) : [];

      histories.push(this.command.toObject());

      localStorage.setItem(`${this.command.name}_histories`, JSON.stringify(histories));
    });
  }
}
