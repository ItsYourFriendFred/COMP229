import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { Cart } from './cart.model';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datasource';
import { HttpClientModule } from '@angular/common/http';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';


@NgModule({
    imports: [HttpClientModule],
    providers: [BookRepository, StaticDataSource, Cart, Order, OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource },
        RestDataSource]
})
export class ModelModule {};