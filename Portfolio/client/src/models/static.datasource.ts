import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource{
    private books: Book[] =
    [
        new Book(1, 'Book 1', 'Description Here 1', 19, 'Authorman 1', 'Science'),
        new Book(2, 'Book 2', 'Description Here 2', 19, 'Authorman 1', 'Horror'),
        new Book(3, 'Book 3', 'Description Here 3', 19, 'Authorman 1', 'Fantasy'),
        new Book(4, 'Book 4', 'Description Here 4', 19, 'Authorman 2', 'Romance'),
        new Book(5, 'Book 5', 'Description Here 5', 19, 'Authorman 2', 'Action'),
        new Book(6, 'Book 6', 'Description Here 6', 19, 'Authorman 3', 'NF'),
        new Book(7, 'Book 7', 'Description Here 7', 19, 'Authorman 4', 'Comedy'),
        new Book(8, 'Book 8', 'Description Here 8', 19, 'Authorman 5', 'World'),
        new Book(9, 'Book 9', 'Description Here 9', 19, 'Authorman 5', 'Science'),
        new Book(10, 'Book 10', 'Description Here 10', 19, 'Authorman 11', 'Science'),
        new Book(11, 'Book 11', 'Description Here 11', 19, 'Authorman 11', 'Brawl')
    ];

    getBooks(): Observable<Book[]>
    {
        return from([this.books]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from ([order]);
    }
}