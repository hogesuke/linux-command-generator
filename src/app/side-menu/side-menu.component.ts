import { Component, OnInit, Input } from '@angular/core';
import { CommandService } from '../shared/command.service';
import { Command } from '../commands/command/command';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent implements OnInit {
  @Input() searchText: string;
  commands: Command[] = [];

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.commands = this.commandService.all;
  }

  get filteredCommands(): Command[] {
    return this.commandService.filter(this.searchText);
  }
}
