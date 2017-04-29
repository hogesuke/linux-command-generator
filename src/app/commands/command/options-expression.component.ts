import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { OptionHolder } from './option-holder';

@Component({
  selector: 'app-options-expression',
  templateUrl: './options-expression.component.html',
  styleUrls: [ './options-expression.component.scss' ],
  animations: [
    trigger('enter', [
      state('in', style({ transform: 'translateX(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateX(-5px)', opacity: 0 }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ transform: 'translateX(-5px)', opacity: 0 }))
      ])
    ])
  ]
})

export class OptionsExpressionComponent {
  @Input() holder: OptionHolder;
}
