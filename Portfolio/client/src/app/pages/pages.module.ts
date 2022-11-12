import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";
import { ComponentsModule } from "../components/components.module";


@NgModule({
    imports: [BrowserModule, FormsModule, ComponentsModule],
    declarations: [
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProductsComponent,
        ServicesComponent],
    exports: [
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProductsComponent,
        ServicesComponent,
        ComponentsModule]
})
export class PagesModule { }