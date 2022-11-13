"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayBookList = void 0;
const book_1 = __importDefault(require("../Models/book"));
function DisplayBookList(req, res, next) {
    book_1.default.find(function (err, bookCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Books Displayed Succesfully', books: bookCollection, user: req.user });
    });
}
exports.DisplayBookList = DisplayBookList;
function DisplayAddPage(req, res, next) {
    res.json({ success: true, message: 'Add page displayed succesfully' });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    book_1.default.findById(id, {}, {}, function (err, bookToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Edit page displayed succesfully', books: bookToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let newBook = new book_1.default({
        "title": req.body.title,
        "author": req.body.author,
        "dateStart": req.body.dateStart,
        "dateEnd": req.body.dateEnd,
        "price": req.body.price
    });
    book_1.default.create(newBook, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Successfully added survey!', survey: newBook });
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedBook = new book_1.default({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    book_1.default.updateOne({ _id: id }, updatedBook, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Successfully edited book!', book: updatedBook });
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    book_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Successfully deleted book!' });
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=book.js.map