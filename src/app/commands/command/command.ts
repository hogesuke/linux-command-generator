import { Option } from './option';
import { Argument } from './argument';
import { OptionHolder } from './option-holder';

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
}
