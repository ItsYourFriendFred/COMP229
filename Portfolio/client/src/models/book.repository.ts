import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class BookRepository {
    private books: Book[] = []; // Book[] = new Array<Book>(); <-- alternate
    private authors: string[] = [];

    // Changed from StaticDataSource to Rest
    constructor(private dataSource: RestDataSource) {
        dataSource.getBooks().subscribe(data => {
            this.books = data;
            this.authors = data.map(book => book.author!) // <-- Check use of ! later for issues 
                .filter((a, index, array) => array.indexOf(a) === index).sort();
        })
    }
    // Solve the null issue later
    getBooks(author: string = null!): Book[] {
        return this.books
            .filter(book => author == null || author === book.author);
    }

    getBook(id: number): Book {
        return this.books.find(book => book._id === id)!;  // Solve null issue later
    }

    getAuthors(): string[] {
        return this.authors;
    }
}