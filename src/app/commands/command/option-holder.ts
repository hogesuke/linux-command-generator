import { Option } from './option';

import _ from 'lodash';

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
    this.options = this.options.filter(op => {
      return op.name !== option.name;
    });
  }

  toggle(option: Option): void {
    if (this.options.some(a => a === option)) {
      this.remove(option);
    } else {
      this.push(option);
    }
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

  include(option: Option): boolean {
    return _.includes(this.options, option);
  }

  clear(): void {
    this.options = [];
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

    const expressions: string[] = [];

    if (this.hasCombinedOption()) {
      expressions.push(this.combinedOptions.map(op => op.withoutHyphen).join(''));
    }
    if (this.hasIsolatedOptions()) {
      expressions.push(this.isolatedOptions.map(op => op.name).join(' '));
    }
    if (this.hasWithArgOptions()) {
      expressions.push(this.withArgOptions.map(op => op.nameWithArgument).join(' '));
    }

    return expressions.join(' ');
  }
}
