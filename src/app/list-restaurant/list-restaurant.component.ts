import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Rate } from '../rate';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  restaurants:Restaurant[]=[];
  name:any;
  errorMessage: any;
  max=10;
  rating:Rate=new Rate();
  currentRate:number;

 
  constructor(private service:DataService) { }
 
  ngOnInit(): void {
   this.service.getRestaurant()
   .subscribe((rest:Restaurant[])=>{
     this.restaurants=rest;
   
     
   })
  }
  search(){
    if(this.name!=""){
      this.restaurants=this.restaurants.filter((res) =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()),
         res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
     })
    }else if(this.name==""){
     this. ngOnInit();
    }
  }
 
  Remove(rest){
    this.service.deletRestaurant(rest.id).subscribe(res=>{
      console.log("sucess"+res);
      location.reload();
        })
  }

  @Input()
  rest:Restaurant;
  onRateChange(x:number,rest:Restaurant){
    this.rating.customer_id=1;
    this.rating.rating=x;
    this.rating.rest_id=rest.id;
    this.service.AddRating(this.rating).subscribe(
      (r:number)=>this.currentRate=r
    );

  }


}
