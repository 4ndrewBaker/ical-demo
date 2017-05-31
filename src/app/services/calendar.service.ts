import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/operator/add/map';

@Injectable()

export class CalendarDay {
  month: string;
}

export class CalendarService {

  public calendar = []

  constructor() {}

  get calendarData() {
    return this.calendar;
  }

}