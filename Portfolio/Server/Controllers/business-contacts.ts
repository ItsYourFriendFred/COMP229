import express from 'express';

import Contact from '../Models/contact';

import { UserDisplayName } from '../Util';

export function DisplayBusinessContacts(req: express.Request, res: express.Response, next: express.NextFunction): void {
    Contact.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contacts', page: 'business-contacts', contacts: contactCollection, displayName: UserDisplayName(req)});
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void {
}