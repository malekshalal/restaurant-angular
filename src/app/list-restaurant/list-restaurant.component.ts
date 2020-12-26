import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
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

}
