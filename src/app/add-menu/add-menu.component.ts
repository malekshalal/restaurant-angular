import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  form:FormGroup;

 
  listResturant:any=[];
  Menus:any=[];
 
  responseText: string;
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getRestaurant()
   .subscribe((rest:Restaurant[])=>{
     this.listResturant=rest;
   
     
   })
   this.form=new FormGroup({
    rest_id:new FormControl(null),
    name:new FormControl('',[Validators.required,Validators.maxLength(40)] ),
    descr:new FormControl(null),
    price:new FormControl(null),
    image:new FormControl(null)
    })





  }

  addmenu(){
    this.service.addmenu(this.form.value).subscribe(
      (data)=>this.responseText=JSON.stringify(data),
      (error)=>this.responseText=error

    )
      this.form.reset();
      


      /* this.service.AddResturant(this.form.value).subscribe(
        (data)=>this.responseText=JSON.stringify(data),
        (error)=>this.responseText=error
  
      )
      console.log(this.form.value)
      this.form.reset(); */
  
  }




}
