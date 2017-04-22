import { Input } from '@angular/core';

export class Argument {
  name: string;
  description: string;
  required: boolean;
  sample: string;
  @Input() input: string;

  constructor(name: string, description: string, required: boolean, sample: string) {
    this.name        = name;
    this.description = description;
    this.required    = required;
    this.sample      = sample;
  }
}
