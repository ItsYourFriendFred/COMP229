import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { CartdetailComponent } from './bookstore/cartdetail/cartdetail.component';
import { CheckoutComponent } from './bookstore/checkout/checkout.component';
import { StoreFirstGuard } from './guards/storeFirst.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Services'}},
  {path: 'book-list', component: BookstoreComponent, data: { title: 'Book Store'}, canActivate: [StoreFirstGuard]},
  {path: 'cart', component: CartdetailComponent, data: { title: 'Checkout'}, canActivate: [StoreFirstGuard]},
  {path: 'checkout', component: CheckoutComponent, data: { title: 'Shopping Cart'}, canActivate: [StoreFirstGuard]},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard]
})
export class AppRoutingModule { }
