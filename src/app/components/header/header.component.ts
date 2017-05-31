import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
export class HeaderComponent implements OnInit, AfterViewInit {

  private maxElementIndex:number;
  private currentIndex: number = 0;
  @Output() currentMonthEvent = new EventEmitter();
  @ViewChild('helloWorldRef') private divHelloWorld: ElementRef;

  constructor(private calendarService: CalendarService) {
    this.maxElementIndex = calendarService.calendarData.length - 1;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  selectCurrentDate() {
    this.currentIndex = 0;
    this.currentMonthEvent.emit(this.currentIndex);
  }

  onIncrementMonth() {
    if(this.currentIndex === this.maxElementIndex) {
      this.currentIndex = this.maxElementIndex;
    } else {
      this.currentIndex++;
    }
    this.currentMonthEvent.emit(this.currentIndex);
  }

  onDecrementMonth() {
    if(this.currentIndex === 0) {
      this.currentIndex = 0;
    } else {
      this.currentIndex--;
    }
    this.currentMonthEvent.emit(this.currentIndex);
  }

}
