import { Injectable } from '@angular/core';

import { Command } from '../command/command';
import { Option } from '../command/option';

@Injectable()
export class CommandService {
  commands: Command[] = [
    new Command(
      'rsync',
      'ファイル同期を行うコマンド',
      'rsync [options] <source> <destination>',
      [ new Option('a', 'タイムスタンプをコピー元と同じにする', false, 'rsync -a ./source ./dest') ]
    ),
    new Command(
      'scp',
      'ローカルとリモート間でファイル転送するコマンド',
      'scp [options] <source> <destination>',
      [ new Option('p', 'タイムスタンプ、モードをコピー元と同じにする', false, 'scp -p ./source ./dest') ]
    )
  ];

  getCommands(): Command[] {
    return this.commands;
  }

  getCommand(name: string): Command {
    return this.commands.find(a => a.name === name);
  }
}
