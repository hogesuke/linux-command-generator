import { Option } from './option';
import { Argument } from './argument';
import { OptionHolder } from './option-holder';

import _ from 'lodash';

export class Command {
  name: string;
  description: string;
  args: Argument[];
  options: Option[];
  optionHolder: OptionHolder;

  constructor(name: string, description: string, args: Argument[], options: Option[]) {
    this.name         = name;
    this.description  = description;
    this.args         = args;
    this.options      = options;
    this.optionHolder = new OptionHolder();
  }

  hasOption(): boolean {
    return this.options && this.options.length > 0;
  }

  hasArg(): boolean {
    return this.args && this.args.length > 0;
  }

  get sentence(): string {
    let sentence = this.name;

    if (this.optionHolder.hasOption()) {
      sentence += ` ${this.optionHolder.optionsExpression}`;
    }

    if (this.hasArg()) {
      const argsExpression = _.chain(this.args)
        .map(arg => {
          if (arg.input) { return arg.input; }
          if (arg.required) { return `<${arg.name}>`; }
          return null;
        })
        .without(null)
        .value()
        .join(' ');

      sentence += ` ${argsExpression}`;
    }

    return sentence;
  }
}
