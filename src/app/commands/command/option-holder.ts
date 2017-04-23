import { Option } from './option';

export class OptionHolder {
  options: Option[];

  constructor() {
    this.options = [];
  }

  push(option: Option): void {
    if (this.options.some(a => a === option)) { return; }
    this.options.push(option);
  }

  remove(option: Option): void {
    this.options.filter(op => {
      return op.name !== option.name;
    });
  }

  hasOption(): boolean {
    return this.options.length > 0;
  }

  hasCombinedOption(): boolean {
    return this.getCombinedOptions().length > 0;
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
