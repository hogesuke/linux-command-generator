import { Component } from '@angular/core';
import { CommandService } from './commands/shared/command.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private commandService: CommandService) {
    commandService.load();
  }
}
