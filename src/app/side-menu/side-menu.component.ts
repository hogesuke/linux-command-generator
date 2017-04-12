import { Component, OnInit } from '@angular/core';
import { CommandService } from '../commands/shared/command.service';
import { Command } from '../commands/command/command';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent implements OnInit {
  commands: Command[] = [];

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.commands = this.commandService.getCommands();
  }
}
