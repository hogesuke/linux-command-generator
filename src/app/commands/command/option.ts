export class Option {
  name: string;
  description: string;
  requireArgument: boolean;
  sample: string;

  constructor(name: string, description: string, requireArgument: boolean, sample: string) {
    this.name            = name;
    this.description     = description;
    this.requireArgument = requireArgument;
    this.sample          = sample;
  }
}
