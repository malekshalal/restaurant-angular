import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  

  fileToUpload :any=null;

  form=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(40)]),
    city:new FormControl(null),
    street:new FormControl(null),
    lat:new FormControl(null),
    lng:new FormControl(null),
    image:new FormControl(null)
    })

 
  id:any;
  resto: any;
  constructor(private service:DataService,private rout:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    console.log(this.rout.snapshot.params.id);
    
    this.service.getcurrentRest(this.rout.snapshot.params.id)
    .subscribe(res=>{
      this.form=new FormGroup({
        name:new FormControl(res['name'],[Validators.required,Validators.maxLength(40)] ),
        city:new FormControl(res['city']),
        street:new FormControl(res['street']),
        lat:new FormControl(res['lat']),
        lng:new FormControl(res['lng']),
        image:new FormControl(res['image'])
        })
      
    })
  }



  


  onsubmit(){
    console.log(this.form.value);
    
   this.service.update(this.rout.snapshot.params.id,this.form.value)
   .subscribe(
      (res)=>console.log(res,"data updated successfull"),
     (err)=>console.log(err)
     
   )
 
  }
  move(){
  this.Router.navigate(["/restuarnt"])
  }
}
