import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookRepository } from 'src/app/models/book.repository';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent {
  public selectedAuthor: any = null!; // TODO Figure out this type issue
  public booksPerPage = 5;
  public selectedPage = 1;

  constructor(private repository: BookRepository,
    private cart: Cart,
    private router: Router) { }

  get books(): Book[]{
    const pageIndex = (this.selectedPage - 1) * this.booksPerPage;
    return this.repository.getBooks(this.selectedAuthor)
    .slice(pageIndex, pageIndex + this.booksPerPage);
  }

  get authors(): string[]{
    return this.repository.getAuthors();
  }

  changeAuthor(newAuthor?: string): void {
    this.selectedAuthor = newAuthor!;
  }

  changePage(newPage: number): void {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void {
    this.booksPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getBooks(this.selectedAuthor).length / this.booksPerPage);
  }

  /*  Replaced by pageCount
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getBooks(this.selectedAuthor).length / this.booksPerPage))
    .fill(0).map((x, i) => i + 1);
  }
  */
  

  addBookToCart(book: Book): void {
    this.cart.addLine(book);
    this.router.navigateByUrl('/cart');
  }
}
/*
import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { BookRepository } from './../models/book.repository';
import { Cart } from '../models/cart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-store',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent
{
  public selectedAuthor: string = '';
  public booksPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: BookRepository,
              private cart: Cart,
              private router: Router) { }

  get books(): Book[]
  {
    const pageIndex = (this.selectedPage - 1) * this.booksPerPage;
    return this.repository.getBooks(this.selectedAuthor)
    .slice(pageIndex, pageIndex + this.booksPerPage);
  }

  get authors(): string[]
  {
    return this.repository.getAuthors();
  }

  changeAuthor(newAuthor?: string): void
  {
    this.selectedAuthor = newAuthor!;
  }

  changePage(newPage: number): void
  {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void
  {
    this.booksPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number
  {
    return Math.ceil(this.repository
      .getBooks(this.selectedAuthor).length / this.booksPerPage);
  }

  addBookToCart(book: Book): void
  {
    this.cart.addLine(book);
    this.router.navigateByUrl('/cart');
  }
}

*/