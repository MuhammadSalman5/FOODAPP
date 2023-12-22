import { Component } from '@angular/core';
//import { StarRatingComponent} from 'ng-starrating'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  ngOnInit() { }
  starRating = 0;
// onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent})
// {
//   alert('old value:${$event.oldValue},
//   New Value:${$event.newValue},
// checked color: ${$event.starRating.checkedcolor},
// unchecked color: ${$event.starRating.uncheckedcolor}
// ');
// }
// }



  title = 'foodorder';
}

