import { Command } from './command';

export interface ICommandParams {
  name: string;
  description: string;
  args: IArgumentParams[];
  options: IOptionParams[];
}

export interface IOptionParams {
  name: string;
  description: string;
  argument?: IArgumentParams;
  canCombine: boolean;
  sample: string;
}

export interface IArgumentParams {
  name: string;
  description: string;
  required: boolean;
  sample: string;
  input?: string;
}

export class CommandGenerator {

  static generate(seed: ICommandParams): Command {
    return new Command(seed);
  }

  static generateAll(seeds: ICommandParams[]): Command[] {
    return seeds.map(seed => this.generate(seed));
  }
}
