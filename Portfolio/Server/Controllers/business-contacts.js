"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayBusinessContacts = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
function DisplayBusinessContacts(req, res, next) {
    contact_1.default.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contacts', page: 'business-contacts', contacts: contactCollection });
    });
}
exports.DisplayBusinessContacts = DisplayBusinessContacts;
//# sourceMappingURL=business-contacts.js.map