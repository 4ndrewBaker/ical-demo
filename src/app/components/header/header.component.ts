import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-calendar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  private maxElementIndex:number;
  private currentIndex: number = 0;
  @Output() currentMonthEvent = new EventEmitter();

  constructor(private calendarService: CalendarService) {
    // this.maxElementIndex = calendarService.calendarData.length - 1;
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
