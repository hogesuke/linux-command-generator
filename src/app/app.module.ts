import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './commands/dashboard.component';
import { CommandService } from './commands/shared/command.service';
import { CommandComponent } from './commands/command/command.component';
import { OptionsExpressionComponent } from './commands/command/options-expression.component';
import { ArgumentsExpressionComponent } from './commands/command/arguments-expression.component';

const commandServiceFactory = (commandService: CommandService) => {
  return () => commandService.load();
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideMenuComponent,
    CommandComponent,
    OptionsExpressionComponent,
    ArgumentsExpressionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/commands', pathMatch: 'full' },
      { path: 'commands', component: DashboardComponent },
      { path: 'commands/:name', component: CommandComponent }
    ])
  ],
  providers: [
    CommandService,
    {
      provide: APP_INITIALIZER,
      useFactory: commandServiceFactory,
      deps: [ CommandService ],
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
