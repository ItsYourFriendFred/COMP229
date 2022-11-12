import { Component } from '@angular/core';
import { Book } from 'src/models/book.model';
import { BookRepository } from 'src/models/book.repository';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent {

  constructor(private repository: BookRepository) { }

  get books(): Book[]{
    return this.repository.getBooks();
  }

  get authors(): string[]{
    return this.repository.getAuthors();
  }

}
