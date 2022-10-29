/* 
File Name: auth.ts
Student Name: Fred Wong
Student ID: 301199984 
Date: October 3, 2022

Controllers/auth.ts
*/

import express from 'express';

// Get Passport functionality
import passport from 'passport';

// Include User model for authentication functions
import User from '../Models/user'

// Display Functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction){
    res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: ''});
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction){
    res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: ''});
}

// Processing Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    passport.authenticate('local', function (err, user, info) {
        // Are there server errors?
        if (err) {
            console.error(err);
            res.end(err);
        }

        // Are there login errors?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('/login');
        }

        // No issues - Proper username and password
        req.logIn(user, function(err) {
            // Are there errors? E.g., DB errors
            if (err) {
                console.error(err);
                res.end(err);
            }

            return res.redirect('/business-contacts');
        });
    })(res, res, next);
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction){
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction){
}