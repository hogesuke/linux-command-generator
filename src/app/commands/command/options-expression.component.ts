import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { OptionHolder } from './option-holder';

@Component({
  selector: 'app-options-expression',
  templateUrl: './options-expression.component.html',
  styleUrls: [ './options-expression.component.scss' ],
  animations: [
    trigger('enter', [
      state('in', style({ transform: 'scaleX(1)' })),
      transition(':enter', [
        style({transform: 'scaleX(0)'}),
        animate(200)
      ]),
      transition(':leave', [
        animate(200, style({transform: 'scaleX(0)'}))
      ])
    ])
  ]
})

export class OptionsExpressionComponent {
  @Input() holder: OptionHolder;
}
