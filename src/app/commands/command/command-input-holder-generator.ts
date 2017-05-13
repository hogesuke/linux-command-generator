export interface ICommandInputParams {
  name: string;
  args: IArgumentInputParams[];
  options: IOptionInputParams[];
  sentence: string;
}

export interface IOptionInputParams {
  name: string;
  argument?: IArgumentInputParams;
}

export interface IArgumentInputParams {
  name: string;
  input: string;
}
