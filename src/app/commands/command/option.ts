import { Argument } from './argument';

export class Option {
  name: string;
  description: string;
  argument: Argument;
  canCombine: boolean;
  sample: string;

  constructor(name: string, description: string, argument: Argument, canCombine: boolean, sample: string) {
    this.name        = name;
    this.description = description;
    this.argument    = argument;
    this.canCombine  = canCombine;
    this.sample      = sample;
  }

  get withoutHyphen(): string {
    return this.name.replace(/^-+/, '');
  }
}
