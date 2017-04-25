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
    return this.combinedOptions.length > 0;
  }

  hasIsolatedOptions(): boolean {
    return this.isolatedOptions.length > 0;
  }

  hasWithArgOptions(): boolean {
    return this.withArgOptions.length > 0;
  }

  get combinedOptions(): Option[] {
    return this.options.filter(op => {
      return op.canCombine && op.argument === null;
    });
  }

  get isolatedOptions(): Option[] {
    return this.options.filter(op => {
      return !op.canCombine && op.argument === null;
    });
  }

  get withArgOptions(): Option[] {
    return this.options.filter(op => {
      return op.argument !== null;
    });
  }

  get optionsExpression(): string {
    if (!this.hasOption()) { return ''; }

    const combinedOp = '-' + this.combinedOptions.map(op => op.withoutHyphen).join('');
    const isolatedOp = this.isolatedOptions.map(op => op.name).join(' ');
    const withArgOp  = this.withArgOptions.map(op => op.nameWithArgument).join(' ');

    return `${combinedOp} ${isolatedOp} ${withArgOp}`;
  }
}
