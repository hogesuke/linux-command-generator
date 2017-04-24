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
        new Option('-a', 'タイムスタンプをコピー元と同じにする', null, true, '-a'),
        new Option('-b', 'ほげほげふがふが', null, true, '-b'),
        new Option('--dry-run', 'ほげほげふがふが', null, false, '--dry-run'),
        new Option('--hoge', 'ほげほげふがふが', new Argument('foo', 'ぴよぴよ', true, './foo'), false, '--hoge ./aaa'),
        new Option('--fuga', 'ほげほげふがふが', new Argument('bar', 'ぴよぴよ', true, './foo'), false, '--fuga ./bbb')
      ]
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
      ]
    )
  ];

  getCommands(): Command[] {
    return this.commands;
  }

  getCommand(name: string): Command {
    return this.commands.find(a => a.name === name);
  }
}
