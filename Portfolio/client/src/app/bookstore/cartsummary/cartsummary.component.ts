import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cartsummary',
  templateUrl: './cartsummary.component.html',
  styleUrls: ['./cartsummary.component.css']
})
export class CartsummaryComponent implements OnInit {

  constructor(public cart: Cart,
    public router: Router) { }

  ngOnInit(): void {
  }

  viewCart(): void {
    this.router.navigateByUrl('/cart');
  }

}
