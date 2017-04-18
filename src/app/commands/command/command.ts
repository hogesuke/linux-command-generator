import { Option } from './option';
import { Argument } from './argument';
import { OptionHolder } from './option-holder';

export class Command {
  name: string;
  description: string;
  args: Argument[];
  options: Option[];
  grammar: string;
  optionHolder: OptionHolder;

  constructor(name: string, description: string, args: Argument[], options: Option[], grammar: string) {
    this.name         = name;
    this.description  = description;
    this.args         = args;
    this.options      = options;
    this.grammar      = grammar;
    this.optionHolder = new OptionHolder();
  }
}
