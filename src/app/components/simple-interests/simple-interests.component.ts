import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-interests',
  templateUrl: './simple-interests.component.html',
  styleUrls: ['./simple-interests.component.css'],
})
export class SimpleInterestsComponent implements OnInit {
  public c: number = 100;
  public i: number = 0.01;
  public t: number = 5;

  constructor() {}

  ngOnInit() {}

  getInterests() {
    return this.c * (1 + this.i * this.t);
  }
}
