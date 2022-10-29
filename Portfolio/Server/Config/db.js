"use strict";
/*!
File Name: Server/Config/db.js
Student Name: Fred Wong
Student ID: 301199984
Date: October 26, 2022
Last Updated: October 26

Setting MongoDB configuration variables
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = exports.HostName = exports.RemoteURI = exports.LocalURI = void 0;
exports.LocalURI = "mongodb://127.0.0.1/contactsDB";
exports.RemoteURI = process.env.RemoteURI;
exports.HostName = "MongoDB Atlas";
exports.Secret = "someSecret";
//# sourceMappingURL=db.js.map