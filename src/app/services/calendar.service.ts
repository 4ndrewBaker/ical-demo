import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {

  public calendar = [
    {
      'title': 'first month'
    },
    {
      'title': 'second month'
    },
    {
      'title': 'third month'
    },
    {
      'title': 'fourth month'
    },
    {
      'title': 'fifth month'
    },
    {
      'title': 'sixth month'
    },
    {
      'title': 'seventh month'
    }
  ]

  constructor() { }

  get calendarData() {
    return this.calendar;
  }

}
