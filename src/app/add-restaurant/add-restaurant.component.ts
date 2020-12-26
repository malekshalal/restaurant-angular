import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator, NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

import { DataService } from '../data.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  form:FormGroup;
  rest:any=[];
 

  responseText="";
constructor(private service:DataService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(40)]),
    city:new FormControl(null),
    street:new FormControl(null),
    lat:new FormControl(null),
    lng:new FormControl(null),
    image:new FormControl(null)
    })
    
  }
  onsubmit( ){
  this.service.AddResturant(this.form.value).subscribe(
      (data)=>this.responseText=JSON.stringify(data),
      (error)=>this.responseText=error

    )
    console.log(this.form.value)
    this.form.reset();
    
    
    
   }

   
   


 
}
