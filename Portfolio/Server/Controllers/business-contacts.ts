import express from 'express';

import Contact from '../Models/contact';

export function DisplayBusinessContacts(req: express.Request, res: express.Response, next: express.NextFunction) {
    Contact.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Business Contacts', page: 'business-contacts', contacts: contactCollection});
    });
}