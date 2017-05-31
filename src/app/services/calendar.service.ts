import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {

  public calendar = [
    {
      'title': 'май 2017 г.'
    },
    {
      'title': 'июнь 2017 г.'
    },
    {
      'title': 'июль 2017 г.'
    },
    {
      'title': 'август 2017 г.'
    },
    {
      'title': 'сентябрь 2017 г.'
    },
    {
      'title': 'октябрь 2017 г.'
    },
    {
      'title': 'ноябрь 2017 г.'
    }
  ]

  constructor() { }

  get calendarData() {
    return this.calendar;
  }

}
