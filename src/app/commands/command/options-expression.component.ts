import { Component, Input } from '@angular/core';

import { OptionHolder } from './option-holder';

@Component({
  selector: 'app-options-expression',
  templateUrl: './options-expression.component.html',
  styleUrls: [ './options-expression.component.scss' ]
})

export class OptionsExpressionComponent {
  @Input() holder: OptionHolder;
}
