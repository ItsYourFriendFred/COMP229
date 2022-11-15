"use strict";
/*!
File Name: Server/Models/contact.js
Student Name: Fred Wong
Student ID: 301199984
Date: October 25, 2022
Last Updated: October 26
Defining a schema for a business contact for MongoDB
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const BookSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    genre: String
}, {
    collection: "books"
});
BookSchema.index({ name: 1 });
const Model = mongoose_1.default.model("Book List", BookSchema);
exports.default = Model;
//# sourceMappingURL=book.js.map