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
}

export class CommandGenerator {

  static generate(seeds: ICommandParams[]): Command[] {
    return seeds.map(seed => new Command(seed));
  }
}
