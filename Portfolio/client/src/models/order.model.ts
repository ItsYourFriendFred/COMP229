import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
    public _id!: number | null;  // TODO Type Assertion
    public name!: string | null;
    public address!: string | null;
    public city!: string | null;
    public province!: string | null;
    public postalCode!: string | null;
    public country!: string | null;
    public shipped = false;

    constructor(public cart: Cart) {
    }

    clear(): void {
        this._id = null;
        this.name = null;
        this.address = null;
        this.city = null;
        this.province = null;
        this.postalCode = null;
        this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}