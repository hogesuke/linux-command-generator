import { Option } from './option';
import { Argument } from './argument';
import { OptionHolder } from './option-holder';

export class Command {
  name: string;
  description: string;
  args: Argument[];
  options: Option[];
  grammar: string;
  optionHolder: OptionHolder;

  constructor(name: string, description: string, args: Argument[], options: Option[], grammar: string) {
    this.name         = name;
    this.description  = description;
    this.args         = args;
    this.options      = options;
    this.grammar      = grammar;
    this.optionHolder = new OptionHolder();
  }

  // todo Utilityクラスに切り出す
  getType(target): string {
    return typeof target;
  }

  getResult(): any[] {
    const terms: any[] = this.grammar.split(' ');

    this.args.forEach(arg => {
      const index = terms.indexOf(`<${arg.name}>`);
      if (index === -1) { return; }
      terms[index] = arg;
    });

    const optionsIndex = terms.indexOf('[options]');
    if (optionsIndex !== -1) {
      terms[optionsIndex] = this.optionHolder;
    }

    return terms;
  }
}
