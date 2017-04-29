import { Input } from '@angular/core';
import { IArgumentParams } from './command-generator';

export class Argument {
  name: string;
  description: string;
  required: boolean;
  sample: string;
  @Input() input: string;

  constructor(params: IArgumentParams) {
    this.name        = params.name;
    this.description = params.description;
    this.required    = params.required;
    this.sample      = params.sample;
  }
}
