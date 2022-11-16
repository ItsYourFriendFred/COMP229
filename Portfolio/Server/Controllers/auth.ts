/*! 
File Name: Server/Controllers/auth.ts
Student Name: Fred Wong
Date: October 26, 2022
Last Updated: October 26

Callback functions corresponding to routes handling authentication requests
*/

import express from 'express';

// Get Passport functionality
import passport from 'passport';

// Include User model for authentication functions
import User from '../Models/user';

// Import JWT Utility Function
import { GenerateToken } from '../Util';

// Import DisplayName Utility method  // Not needed if a front-end is used
import { UserDisplayName } from '../Util';

// Display Functions  // Not needed if a front-end is used
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!req.user) {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }
    return res.redirect('/business-contacts');
}
/*
export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!req.user) {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) });
    }
    return res.redirect('/business-contacts');
}
*/  // Display functions not needed if a front-end is used



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
            // req.flash('loginMessage', 'Authentication Error!');  // Not needed due to front-end change when there's no user anymore
            // return res.redirect('/login');
            return res.json({ sucess: false, message: 'Error: Authentication Failed' })
        }

        // No issues - Proper username and password
        req.logIn(user, function (err) {
            // Are there errors? E.g., DB errors
            if (err) {
                console.error(err);
                res.end(err);
            }
            // return res.redirect('/business-contacts');  // To be done on the front-end now
            const authToken = GenerateToken(user);

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

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    // Instantiate a new user object
    let newUser = new User({
        // req.body.attribute correspond to name attributes from HTML form
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, function (err) {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists!');
                // req.flash('registerMessage', 'Registration Error!');
            }
            else {
                console.error(err.name); // Other error
                // req.flash('registerMessage', 'Server Error!');
            }
            // return res.redirect('register');  // Since no redirecting on the back-end
            return res.json({success: false, message: 'Error: Registration failed!'});
        }

        // If everything is okay; i.e, user hase been registered

        // Automatically log in the user
        /* return passport.authenticate('local')(req, res, function () {
            console.log(req.body.password);
            return res.redirect('/business-contacts');
        }); */  // The front-end has to do everything here that must happen now

        return res.json({success: true, message: 'User registered successfully!'});
    });
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.logOut(function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log("User has logged out.");
    });

    // res.redirect('/login');  // Not redirecting in backend anymore
    res.json({success: true, message: 'User logged out successfully!'});
}