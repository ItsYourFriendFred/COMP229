import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "src/models/model.module";
import { BookstoreComponent } from "./bookstore.component";
import { CounterDirective } from "./counter.directive";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [BookstoreComponent, CounterDirective],
    exports: [BookstoreComponent, CounterDirective]
})
export class BookStoreModule {};