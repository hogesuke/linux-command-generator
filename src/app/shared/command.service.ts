import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Command } from '../commands/command/command';
import { CommandGenerator, ICommandParams } from '../commands/command/command-generator';

@Injectable()
export class CommandService {
  commands: Command[] = [];
  mainScrollTop = 0; // todo 適切な場所に移動させる

  constructor(private http: Http) {
  }

  get all(): Command[] {
    return this.commands;
  }

  filter(text: string): Command[] {
    if (!text) { return this.commands; }
    return this.commands.filter(a => a.name.indexOf(text) !== -1);
  }

  find(name: string): Command {
    return this.commands.find(a => a.name === name);
  }

  load(): Promise<void> {
    return this.loadSeeds().then(seeds => {
      this.commands = CommandGenerator.generateAll(seeds);
    });
  }

  private loadSeeds(): Promise<ICommandParams[]> {
    return this.http.get('/assets/commands.json')
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): ICommandParams[] {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return (res.json() || []) as ICommandParams[];
  }

  private handleError (error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
