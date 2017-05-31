import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
    trigger('fadeInUpNgIf', [
      transition(':enter', [
        style({opacity: 0}),
        animate('.2s linear', style({transform: 'none', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'none', 'opacity': 1}),
        animate('.2s linear', style({ opacity: 0}))
      ])
    ])
  ]
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
