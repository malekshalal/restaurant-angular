import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-orderitem',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css']
})
export class OrderitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @Input()
  order:Order;

}
