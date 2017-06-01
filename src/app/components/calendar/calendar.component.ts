import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CalendarService } from "../../services/calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit, OnChanges {
  @Input() currentMonth: number = 0;
  calendarData: object;
  errorMessage: string;
  myDate: Date;
  // sameDay: Date;

  constructor(private calendarService: CalendarService) {
    // this.myDate = new Date();
    // this.myDate = moment().format('dddd');
  }

  ngOnInit() {
    this.getCalendarData();
    // this.calendarData = this.calendarService.calendarData[this.currentMonth];
  }

  ngOnChanges() {
    // this.calendarData = this.calendarService.calendarData[this.currentMonth];
  }

  getCalendarData() {
    this.calendarService.getCalendarData()
      .then(
        data => this.calendarData = data,
        error =>  this.errorMessage = <any>error);
  }

}
