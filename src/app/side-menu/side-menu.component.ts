import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  commands = [ 'rsync', 'scp', 'ln' ];
}
