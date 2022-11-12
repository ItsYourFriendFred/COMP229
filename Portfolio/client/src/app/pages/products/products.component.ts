import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasepageComponent } from 'src/app/components/basepage/basepage.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BasepageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
   }

  override ngOnInit(): void {
  }

}
