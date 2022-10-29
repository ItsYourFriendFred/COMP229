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
    res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: UserDisplayName(req)})
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let id = req.params.id;
    
    // Pass the id to the DB and read the contact into the edit page
    Contact.findById(id, {}, {}, function(err, contactToEdit) {
        if(err){
            console.error(err);
            res.end(err);
        }

        // Show the Edit view with the data
        res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: UserDisplayName(req)})
    });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // Instantiate a new Contact to add
    let newContact = new Contact(
        {
            "ContactName": req.body.contactName,
            "ContactNumber": req.body.contactNumber,
            "EmailAddress": req.body.emailAddress
        }
    );

    // Insert the new Contact object into the database (contacts collection)
    Contact.create(newContact, function (err: ErrorCallback) {
        if (err) {
            console.error(err);
            res.end(err);
        }

        // New Contact has been added -> Refresh business-contacts
        res.redirect('/business-contacts');
    })
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void {
}