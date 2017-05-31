import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private currentMonth: number = 0;

  getCurrentMonth(event) {
    this.currentMonth = event;
  }

}
