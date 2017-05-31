import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() currentMonth: number = 0;
  private calendarData;

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.calendarData = this.calendarService.calendarData[this.currentMonth];
  }

  ngOnChanges() {
    this.calendarData = this.calendarService.calendarData[this.currentMonth];
  }
}
