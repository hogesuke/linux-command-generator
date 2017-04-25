import { Component, Input } from '@angular/core';

import { Argument } from './argument';

@Component({
  selector: 'app-arguments-expression',
  templateUrl: './arguments-expression.component.html',
  styleUrls: [ './arguments-expression.component.scss' ]
})

export class ArgumentsExpressionComponent {
  @Input() args: Argument[];
}
