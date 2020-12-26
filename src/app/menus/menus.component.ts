import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus:any=[];
  id:any;
  constructor(private service:DataService,private rout:ActivatedRoute) { 
    
   }

  ngOnInit(): void {
    this.rout.params.subscribe(d=>{
      this.id=d['id']
      
   })
   this.service.showmenus(this.id).subscribe((men:any)=>this.menus=men)
    

  }

  

}
