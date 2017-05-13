import { Input } from '@angular/core';
import { IArgumentParams } from './command-generator';
import { IArgumentInputParams } from './command-input-holder-generator';

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
    this.input       = params.input || '';
  }

  clear(): void {
    this.input = '';
  }

  toObject(): IArgumentInputParams {
    return {
      name: this.name,
      input: this.input
    };
  }
}
