"use strict";
/*!
File Name: Server/Util/index.js
Student Name: Fred Wong
Student ID: 301199984
Date: October 3, 2022
Last Updated: October 26, 2022

Utility functions to be used throughout the application
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditGuard = exports.AuthGuard = exports.UserDisplayName = void 0;
function UserDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.DisplayName.toString();
    }
    return '';
}
exports.UserDisplayName = UserDisplayName;
function AuthGuard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
exports.AuthGuard = AuthGuard;
function EditGuard(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    else {
        return res.redirect('/business-contacts');
    }
    ;
}
exports.EditGuard = EditGuard;
//# sourceMappingURL=index.js.map