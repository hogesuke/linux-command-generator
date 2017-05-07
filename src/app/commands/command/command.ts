import { Option } from './option';
import { Argument } from './argument';
import { OptionHolder } from './option-holder';
import { ICommandParams, IArgumentParams, IOptionParams } from './command-generator';

import _ from 'lodash';

export class Command {
  name: string;
  description: string;
  args: Argument[];
  options: Option[];
  optionHolder: OptionHolder;

  constructor(params: ICommandParams) {
    this.name         = params.name;
    this.description  = params.description;
    this.args         = params.args.map((p: IArgumentParams) => new Argument(p));
    this.options      = params.options.map((p: IOptionParams) => new Option(p));
    this.optionHolder = new OptionHolder();
  }

  hasOption(): boolean {
    return this.options && this.options.length > 0;
  }

  hasArg(): boolean {
    return this.args && this.args.length > 0;
  }

  clear(): void {
    this.args.forEach(a => a.clear());
    this.options.forEach(a => a.clear());
    this.optionHolder.clear();
  }

  toObject(): ICommandParams {
    return {
      name: this.name,
      description: this.description,
      args: this.args.map(a => a.toObject()),
      options: this.optionHolder.options.map(a => a.toObject())
    };
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
