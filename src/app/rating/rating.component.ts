import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5]; // Number of stars
  currentRate: number = 0;

  rate(rating: number) {
    this.currentRate = rating;
  }
  // star:4.0,
  constructor() { }

  ngOnInit() {
  }
  // onRate($event:{oldValue:number, newValue:number, starRating:RatingComponent}) {
  //   alert(`Old Value:${$event.oldValue}, 
  //     New Value: ${$event.newValue}, 
  //     Checked Color: ${$event.starRating.checkedcolor}, 
  //     Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  // }

}