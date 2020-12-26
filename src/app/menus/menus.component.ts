import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus:any=[];
  id:any;
  constructor(private service:DataService,private rout:ActivatedRoute) { }

  ngOnInit(): void {
     this.rout.params.subscribe(d=>{
      this.id=d['id']
      this.menus= this.service.showmenus(this.id);
    
    })
  }

}
