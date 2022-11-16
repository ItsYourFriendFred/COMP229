/*! 
File Name: Server/Controllers/business-contacts.ts
Student Name: Fred Wong
Date: October 26, 2022
Last Updated: October 26
Callback functions corresponding to routes handling business-contact (database) requests
*/
import express from 'express';
import { CallbackError } from 'mongoose';

import Book from '../Models/book';

import { UserDisplayName } from '../Util';

export function DisplayBookList(req: express.Request, res: express.Response, next: express.NextFunction): void {
    Book.find(function (err, bookCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        //     res.render('index', {title: 'Business Contacts', page: 'business-contacts', contacts: contactCollection, displayName: UserDisplayName(req)});
        // }).sort('ContactName').collation({ locale: 'en', strength: 2 });
        res.json(bookCollection);
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: UserDisplayName(req)})
    res.json({ success: true, message: 'Add page displayed succesfully' });
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let id = req.params.id;

    // Pass the id to the DB and read the contact into the edit page
    Book.findById(id, {}, {}, function (err, bookToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }

        // Show the Edit view with the data
        // res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: UserDisplayName(req)})
        res.json({ success: true, message: 'Edit page displayed succesfully', book: bookToEdit });
    });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    // Instantiate a new Contact to add
    let newBook = new Book(
        {
            "title": req.body.title,
            "author": req.body.author,
            "published": req.body.published,
            "description": req.body.description,
            "price": req.body.price
        }
    );

    // Insert the new Contact object into the database (contacts collection)
    Book.create(newBook, function (err: CallbackError) {
        if (err) {
            console.error(err);
            res.end(err);
        }

        // New Contact has been added -> Refresh business-contacts
        // res.redirect('/business-contacts');  // No longer redirecting on the back-end
        res.json({success: true, message: 'Successfully added book!', book: newBook});
    })
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let id = req.params.id;

    // Instantiate a new Contact to edit
    let updatedBook = new Book(
        {
            "_id": id,
            "title": req.body.title,
            "author": req.body.author,
            "published": req.body.published,
            "description": req.body.description,
            "price": req.body.price
        }
    );

    // Update the business contact in the database
    Book.updateOne({_id: id}, updatedBook, function(err: CallbackError) {
        if (err) {
            console.error(err);
            res.end(err);
        }

        // Contact has been edited -> Refresh business-contacts
        // res.redirect('/business-contacts');  // No longer redirecting on the back-end
        res.json({success: true, message: 'Successfully edited book!', book: updatedBook});
    });
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void {
    let id = req.params.id;

    // Pass the ID to the database and delete the contact
    Book.remove({_id: id}, function(err: CallbackError){
        if (err) {
            console.error(err);
            res.end(err);
        }

        // Delete was successful
        // res.redirect('/business-contacts');  // No longer redirecting on the back-end
        res.json({success: true, message: 'Successfully deleted book!'});
    });
}