import { Option } from './option';
import { Argument } from './argument';

export class Command {
  name: string;
  description: string;
  args: Argument[];
  options: Option[];
  grammar: string;

  constructor(name: string, description: string, args: Argument[], options: Option[], grammar: string) {
    this.name        = name;
    this.description = description;
    this.args        = args;
    this.options     = options;
    this.grammar     = grammar;
  }
}
