import { Component, AfterViewInit, ElementRef } from '@angular/core';
import _ from 'lodash';

import { CommandService } from './shared/command.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent implements AfterViewInit {
  private _el: HTMLElement;

  constructor(
    private commandService: CommandService,
    private el: ElementRef
  ) {
    this._el = this.el.nativeElement;
  }

  ngAfterViewInit(): void {
    const main = this._el.querySelector('#main');
    const fps = 30;

    this.commandService.mainScrollTop = 0;

    main.addEventListener('scroll', _.throttle(() => {
        this.commandService.mainScrollTop = main.scrollTop;
    }, 1000 / fps));
  }
}
