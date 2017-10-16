import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CalendarComponent } from 'ap-angular2-fullcalendar';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
