import { Component, OnInit } from '@angular/core';
import { Command } from './command/command';
import { CommandService } from './shared/command.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  commands: Command[] = [];

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.commands = this.commandService.getCommands();
  }

}
