import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import {CalendarService} from "./services/calendar.service";
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // BrowserAnimationsModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})

export class AppModule { }