export class Argument {
  name: string;
  description: string;
  required: boolean;
  sample: string;

  constructor(name: string, description: string, required: boolean, sample: string) {
    this.name        = name;
    this.description = description;
    this.required    = required;
    this.sample      = sample;
  }

  set input(input: string) {
    this.input = input;
  }

  get input() {
    return this.input;
  }
}
