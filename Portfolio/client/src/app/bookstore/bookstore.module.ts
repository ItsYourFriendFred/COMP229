import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "src/app/models/model.module";
import { BookstoreComponent } from "./bookstore.component";
import { CounterDirective } from "./counter.directive";
import { CartdetailComponent } from './cartdetail/cartdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [BookstoreComponent, CounterDirective, CartdetailComponent, CheckoutComponent],
    exports: [BookstoreComponent, CounterDirective, CartdetailComponent, CheckoutComponent]
})
export class BookStoreModule {};