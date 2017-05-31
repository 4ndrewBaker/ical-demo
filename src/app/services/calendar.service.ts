import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/operator/add/map';

@Injectable()

export class CalendarDay {
  month: string;
}

export class CalendarService {

  public calendar = [
    {
      'month': '2017-06-01',
      'days': [
        {
          'date': '2017-06-01',
          'currentMonth': true,
          'events': [
            {'Почитать книжку': 'home'},
            {'Почесать пятку': 'home'},
            {'Допилить проект': 'work'}
          ]
        },
        {
          'date': '2017-06-02',
          'currentMonth': true,
          'events': [
            {'Поспать': 'home'}
          ]
        },
        {
          'date': '2017-06-03',
          'currentMonth': true
        },
        {
          'date': '2017-06-04',
          'currentMonth': true
        },
        {
          'date': '2017-06-05',
          'currentMonth': true
        },
        {
          'date': '2017-06-06',
          'currentMonth': true
        },
        {
          'date': '2017-06-07',
          'currentMonth': true
        },
        {
          'date': '2017-06-08',
          'currentMonth': true
        },
        {
          'date': '2017-06-09',
          'currentMonth': true
        },
        {
          'date': '2017-06-10',
          'currentMonth': true
        },
        {
          'date': '2017-06-11',
          'currentMonth': true
        },
        {
          'date': '2017-06-12',
          'currentMonth': true
        },
        {
          'date': '2017-06-13',
          'currentMonth': true
        },
        {
          'date': '2017-06-14',
          'currentMonth': true
        },
        {
          'date': '2017-06-15',
          'currentMonth': true
        },
        {
          'date': '2017-06-16',
          'currentMonth': true
        },
        {
          'date': '2017-06-17',
          'currentMonth': true
        },
        {
          'date': '2017-06-18',
          'currentMonth': true
        },
        {
          'date': '2017-06-19',
          'currentMonth': true
        },
        {
          'date': '2017-06-20',
          'currentMonth': true
        },
        {
          'date': '2017-06-21',
          'currentMonth': true
        },
        {
          'date': '2017-06-22',
          'currentMonth': true
        },
        {
          'date': '2017-06-23',
          'currentMonth': true
        },
        {
          'date': '2017-06-24',
          'currentMonth': true
        },
        {
          'date': '2017-06-25',
          'currentMonth': true
        },
        {
          'date': '2017-06-26',
          'currentMonth': true
        },
        {
          'date': '2017-06-27',
          'currentMonth': true
        },
        {
          'date': '2017-06-28',
          'currentMonth': true
        },
        {
          'date': '2017-06-29',
          'currentMonth': true
        },
        {
          'date': '2017-06-30',
          'currentMonth': true
        },
        {
          'date': '2017-06-31',
          'currentMonth': true
        }
      ]
    },
    {
      'month': '2017-07-01',
      'days': [
        {
          'date': '2017-07-01',
          'currentMonth': true,
          'events': [
            {'Почитать книжку': 'home'},
            {'Почесать пятку': 'home'},
            {'Допилить проект': 'work'}
          ]
        },
        {
          'date': '2017-07-02',
          'currentMonth': true,
          'events': [
            {'Поспать': 'home'}
          ]
        },
        {
          'date': '2017-07-03',
          'currentMonth': true
        },
        {
          'date': '2017-07-04',
          'currentMonth': true
        },
        {
          'date': '2017-07-05',
          'currentMonth': true
        },
        {
          'date': '2017-07-06',
          'currentMonth': true
        },
        {
          'date': '2017-07-07',
          'currentMonth': true
        },
        {
          'date': '2017-07-08',
          'currentMonth': true
        },
        {
          'date': '2017-07-09',
          'currentMonth': true
        },
        {
          'date': '2017-07-10',
          'currentMonth': true
        },
        {
          'date': '2017-07-11',
          'currentMonth': true
        },
        {
          'date': '2017-07-12',
          'currentMonth': true
        },
        {
          'date': '2017-07-13',
          'currentMonth': true
        },
        {
          'date': '2017-07-14',
          'currentMonth': true
        },
        {
          'date': '2017-07-15',
          'currentMonth': true
        },
        {
          'date': '2017-07-16',
          'currentMonth': true
        },
        {
          'date': '2017-07-17',
          'currentMonth': true
        },
        {
          'date': '2017-07-18',
          'currentMonth': true
        },
        {
          'date': '2017-07-19',
          'currentMonth': true
        },
        {
          'date': '2017-07-20',
          'currentMonth': true
        },
        {
          'date': '2017-07-21',
          'currentMonth': true
        },
        {
          'date': '2017-07-22',
          'currentMonth': true
        },
        {
          'date': '2017-07-23',
          'currentMonth': true
        },
        {
          'date': '2017-07-24',
          'currentMonth': true
        },
        {
          'date': '2017-07-25',
          'currentMonth': true
        },
        {
          'date': '2017-07-26',
          'currentMonth': true
        },
        {
          'date': '2017-07-27',
          'currentMonth': true
        },
        {
          'date': '2017-07-28',
          'currentMonth': true
        },
        {
          'date': '2017-07-29',
          'currentMonth': true
        },
        {
          'date': '2017-07-30',
          'currentMonth': true
        }
      ]
    }
  ]

  constructor() {}

  get calendarData() {
    return this.calendar;
  }

}
