"use strict";
/*!
File Name: Server/routes/business-contacts.js
Student Name: Fred Wong
Student ID: 301199984
Date: October 25, 2022
Last Updated: October 26

Routes handling requests related to business-contacts access and processing
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const business_contacts_1 = require("../Controllers/business-contacts");
router.get('/business-contacts', business_contacts_1.DisplayBusinessContacts);
router.get('/add', business_contacts_1.DisplayAddPage);
router.get('/edit/:id', business_contacts_1.DisplayEditPage);
router.post('/add', business_contacts_1.ProcessAddPage);
router.post('/edit/:id', business_contacts_1.ProcessEditPage);
router.get('/delete/:id', business_contacts_1.ProcessDeletePage);
exports.default = router;
//# sourceMappingURL=business-contacts.js.map