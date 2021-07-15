import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.css']
})
export class TopComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  valA=100000;
  valB=5;
  formatThumbLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }


}
