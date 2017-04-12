import { Injectable } from '@angular/core';

import { Command } from '../command/command';
import { Option } from '../command/option';

@Injectable()
export class CommandService {
  getCommands(): Command[] {
    return [
      new Command(
        'rsync',
        'rsync [options] <source> <destination>',
        [ new Option('a', 'タイムスタンプをコピー元と同じにする', false, 'rsync -a ./source ./dest') ]
      ),
      new Command(
        'scp',
        'scp [options] <source> <destination>',
        [ new Option('p', 'タイムスタンプ、モードをコピー元と同じにする', false, 'scp -p ./source ./dest') ]
      )
    ];
  }
}
