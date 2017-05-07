import { Argument } from './argument';
import { IOptionParams } from './command-generator';

export class Option {
  name: string;
  description: string;
  argument: Argument;
  canCombine: boolean;
  sample: string;

  constructor(params: IOptionParams) {
    this.name        = params.name;
    this.description = params.description;
    this.canCombine  = params.canCombine;
    this.sample      = params.sample;
    this.argument    = params.argument ? new Argument(params.argument) : null;
  }

  clear(): void {
    if (this.argument) { this.argument.clear(); }
  }

  toObject(): Object {
    return {
      name: this.name,
      description: this.description,
      argument: this.argument && this.argument.toObject(),
      canCombine: this.canCombine,
      sample: this.sample,
    };
  }

  get withoutHyphen(): string {
    return this.name.replace(/^-+/, '');
  }

  get nameWithArgument(): string {
    if (!this.argument) { return this.name; }

    const input = this.argument.input ? this.argument.input : `<${this.argument.name}>`;

    return `${this.name} ${input}`;
  }
}
