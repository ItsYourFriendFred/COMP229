"use strict";
/*!
File Name: Server/Controllers/auth.ts
Student Name: Fred Wong
Date: October 26, 2022
Last Updated: October 26

Callback functions corresponding to routes handling authentication requests
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../Models/user"));
const Util_1 = require("../Util");
const Util_2 = require("../Util");
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: (0, Util_2.UserDisplayName)(req) });
    }
    return res.redirect('/business-contacts');
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', function (err, user, info) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        if (!user) {
            return res.json({ sucess: false, message: 'Error: Authentication Failed' });
        }
        req.logIn(user, function (err) {
            if (err) {
                console.error(err);
                res.end(err);
            }
            const authToken = (0, Util_1.GenerateToken)(user);
            return res.json({
                success: true, message: 'User logged in successfully!', user: {
                    id: user._id,
                    DisplayName: user.DisplayName,
                    username: user.username,
                    EmailAddress: user.EmailAddress
                }, token: authToken
            });
        });
        return;
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function ProcessRegisterPage(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });
    user_1.default.register(newUser, req.body.password, function (err) {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists!');
            }
            else {
                console.error(err.name);
            }
            return res.json({ success: false, message: 'Error: Registration failed!' });
        }
        return res.json({ success: true, message: 'User registered successfully!' });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
    req.logOut(function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log("User has logged out.");
    });
    res.json({ success: true, message: 'User logged out successfully!' });
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=auth.js.map