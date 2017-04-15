import { Option } from './option';
import { Argument } from './argument';

export class Command {
  name: string;
  description: string;
  arguments: Argument[];
  options: Option[];
  grammar: string;

  constructor(name: string, description: string, arguments: Argument[], options: Option[], grammar: string) {
    this.name        = name;
    this.description = description;
    this.arguments   = arguments;
    this.options     = options;
    this.grammar     = grammar;
  }
}
