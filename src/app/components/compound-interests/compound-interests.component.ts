import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-interests',
  templateUrl: './compound-interests.component.html',
  styleUrls: ['./compound-interests.component.css'],
})
export class CompoundInterestsComponent implements OnInit {
  public c: number = 100;
  public i: number = 0.01;
  public t: number = 5;

  constructor() {}

  ngOnInit() {}

  getInterests() {
    return this.c * Math.pow(1 + this.i, this.t);
  }
}
