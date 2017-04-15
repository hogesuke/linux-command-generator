import { Argument } from './argument';

export class Option {
  name: string;
  description: string;
  argument: Argument;
  sample: string;

  constructor(name: string, description: string, argument: Argument, sample: string) {
    this.name        = name;
    this.description = description;
    this.argument    = argument;
    this.sample      = sample;
  }
}
