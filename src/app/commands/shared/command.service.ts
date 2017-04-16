import { Injectable } from '@angular/core';

import { Command } from '../command/command';
import { Option } from '../command/option';
import { Argument } from '../command/argument';

@Injectable()
export class CommandService {
  commands: Command[] = [
    new Command(
      'rsync',
      'ファイル同期を行うコマンド',
      [
        new Argument('source', 'コピー元', true, './source'),
        new Argument('destination', 'コピー先', true, './dest')
      ],
      [
        new Option('-a', 'タイムスタンプをコピー元と同じにする', null, true, '-a')
      ],
      'rsync [options] <source> <destination>'
    ),
    new Command(
      'scp',
      'ローカルとリモート間でファイル転送するコマンド',
      [
        new Argument('source', 'コピー元', true, './source'),
        new Argument('destination', 'コピー先', true, './dest')
      ],
      [
        new Option('-p', 'タイムスタンプ、モードをコピー元と同じにする', null, true, '-p')
      ],
      'scp [options] <source> <destination>'
    )
  ];

  getCommands(): Command[] {
    return this.commands;
  }

  getCommand(name: string): Command {
    return this.commands.find(a => a.name === name);
  }
}
