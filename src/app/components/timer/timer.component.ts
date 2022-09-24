import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  private counter: number = 0;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  getCounter() {
    return this.counter;
  }
}
