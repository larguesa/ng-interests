import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-numbers',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.css'],
})
export class RandomNumbersComponent implements OnInit {
  public n: number = 5;
  public list: number[] = [];

  constructor() {}

  ngOnInit() {}

  getRandomNumbers() {
    if (this.list.length != this.n) {
      this.list = [];
      for (let i = 1; i <= this.n; i++) {
        let r = Math.random() * 100;
        this.list.push(Math.floor(r));
      }
    }
    return this.list;
  }
}
