import { Option } from './option';

export class Command {
  name: string;
  grammar: string;
  options: Option[];

  constructor(name: string, grammar: string, options: Option[]) {
    this.name    = name;
    this.grammar = grammar;
    this.options = options;
  }
}
