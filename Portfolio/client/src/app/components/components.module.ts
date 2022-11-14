import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BasepageComponent } from "./basepage/basepage.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CartsummaryComponent } from "../bookstore/cartsummary/cartsummary.component";



@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        CartsummaryComponent,
        BasepageComponent,
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        BasepageComponent,
        FooterComponent,
        HeaderComponent]
})
export class ComponentsModule { }