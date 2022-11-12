import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book.model';

const Protocol = 'http';
const Port = 3500;

@Injectable()
export class RestDataSource {
    baseUrl!: string;
    
    constructor(private http: HttpClient) {
        this.baseUrl = `${Protocol}://${location.hostname}:${Port}/`;
    }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.baseUrl + 'book-list');
    }
}