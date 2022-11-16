import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cartdetail',
  templateUrl: './cartdetail.component.html',
  styleUrls: ['./cartdetail.component.css']
})
export class CartdetailComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}
