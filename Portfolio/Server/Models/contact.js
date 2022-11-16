"use strict";
/*!
File Name: Server/Models/contact.js
Student Name: Fred Wong
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
const ContactSchema = new Schema({
    ContactName: String,
    ContactNumber: String,
    EmailAddress: String
}, {
    collection: "contacts"
});
ContactSchema.index({ ContactName: 1 });
const Model = mongoose_1.default.model("Business_Contact", ContactSchema);
exports.default = Model;
//# sourceMappingURL=contact.js.map