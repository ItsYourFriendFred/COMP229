"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayBusinessContacts = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
function DisplayBusinessContacts(req, res, next) {
    contact_1.default.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Business-Contacts Displayed Succesfully', contacts: contactCollection, user: req.user });
    });
}
exports.DisplayBusinessContacts = DisplayBusinessContacts;
function DisplayAddPage(req, res, next) {
    res.json({ success: true, message: 'Add page displayed succesfully' });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, {}, {}, function (err, contactToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Edit page displayed succesfully', contacts: contactToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contact_1.default({
        "ContactName": req.body.contactName,
        "ContactNumber": req.body.contactNumber,
        "EmailAddress": req.body.emailAddress
    });
    contact_1.default.create(newContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Successfully added business contact!', contact: newContact });
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contact_1.default({
        "_id": id,
        "ContactName": req.body.contactName,
        "ContactNumber": req.body.contactNumber,
        "EmailAddress": req.body.emailAddress
    });
    contact_1.default.updateOne({ _id: id }, updatedContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Successfully edited business contact!', contact: updatedContact });
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Successfully deleted business contact!' });
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=business-contacts.js.map