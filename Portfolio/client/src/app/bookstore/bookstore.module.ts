import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "src/models/model.module";
import { BookstoreComponent } from "./bookstore.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [BookstoreComponent],
    exports: [BookstoreComponent]
})
export class BookStoreModule {};