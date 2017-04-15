import { Option } from './option';

export class Command {
  name: string;
  description: string;
  grammar: string;
  options: Option[];

  constructor(name: string, description: string, grammar: string, options: Option[]) {
    this.name        = name;
    this.description = description;
    this.grammar     = grammar;
    this.options     = options;
  }
}
