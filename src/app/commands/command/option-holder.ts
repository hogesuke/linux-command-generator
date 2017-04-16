import { Option } from './option';

export class OptionHolder {
  options: Option[];

  constructor() {
    this.options = [];
  }

  push(option: Option): void {
    this.options.push(option);
  }

  remove(option: Option): void {
    this.options.filter(op => {
      return op.name !== option.name;
    });
  }

  getCombinedOptions(): Option[] {
    return this.options.filter(op => {
      return op.canCombine && op.argument === null;
    });
  }

  getIsolatedOptions(): Option[] {
    return this.options.filter(op => {
      return !op.canCombine || op.argument !== null;
    });
  }
}
