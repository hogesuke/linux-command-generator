import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './commands/dashboard.component';
import { CommandService } from './commands/shared/command.service';
import { CommandComponent } from './commands/command/command.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideMenuComponent,
    CommandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/commands', pathMatch: 'full' },
      { path: 'commands', component: DashboardComponent },
      { path: 'commands/:name', component: CommandComponent }
    ])
  ],
  providers: [ CommandService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
