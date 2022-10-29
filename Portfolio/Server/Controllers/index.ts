/* 
File Name: index.ts
Student Name: Fred Wong
Student ID: 301199984 
Date: October 3, 2022

Controllers/index.js
*/

import express from 'express';

import { UserDisplayName } from '../Util';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction){
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction){
    res.render('index', { title: 'About', page: 'about', displayName: UserDisplayName(req) });
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction){
    res.render('index', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req) });
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction){
    res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayName(req) });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction){
    res.render('index', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req) });
}