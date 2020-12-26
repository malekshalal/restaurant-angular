import { Component, Input, OnInit } from '@angular/core';
import { Rate } from '../rate';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
 _rating:number;
  stars: any;
  constructor() { }

  ngOnInit(): void {

  }
  @Input()
  set rating(rating: number){
    this._rating = rating;

    let j = Math.floor(this._rating);
    console.log("j = " + j);
    for(let i=0;i<j;i++){
      
      
    this.stars[i] = i;
    }
  }
}
