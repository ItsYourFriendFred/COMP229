"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let mongoose = require('mongoose');
const book_1 = require("../controllers/book");
const Util_1 = require("../Util");
router.get('/', book_1.DisplayBookList);
router.get('/add', Util_1.AuthGuard, book_1.DisplayAddPage);
router.get('/edit/', Util_1.AuthGuard, Util_1.EditGuard);
router.get('/edit/:id', Util_1.AuthGuard, book_1.DisplayEditPage);
router.post('/survey/add', Util_1.AuthGuard, book_1.ProcessAddPage);
router.post('/edit/:id', Util_1.AuthGuard, book_1.ProcessEditPage);
router.get('/delete/:id', Util_1.AuthGuard, book_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=book.js.map