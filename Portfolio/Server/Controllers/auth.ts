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
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction){
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction){
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction){
}