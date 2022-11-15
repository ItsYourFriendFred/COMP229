/*!
File Name: Server/routes/business-contacts.js
Student Name: Fred Wong
Date: October 25, 2022
Last Updated: October 26

Routes handling requests related to business-contacts access and processing
*/

import express from 'express';
const router = express.Router();

// import { AuthGuard, EditGuard } from '../Util';  // Replaced by protecting entire route with JWT

import { DisplayAddPage, DisplayBusinessContacts, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/business-contacts'

// Display Business Contacts Page
router.get('/business-contacts', DisplayBusinessContacts);
// Temp remove Authguard for api conversion ^v

// Display Add Page
// router.get('/add', AuthGuard, DisplayAddPage);
router.get('/add', DisplayAddPage);

// Display Edit Page
// router.get('/edit/', AuthGuard, EditGuard);
// router.get('/edit/:id', AuthGuard, DisplayEditPage);
router.get('/edit/:id', DisplayEditPage);

// Process Add Page
//router.post('/add', AuthGuard, ProcessAddPage);
router.post('/add', ProcessAddPage);

// Process Edit Page
// router.post('/edit/:id', AuthGuard, ProcessEditPage);
router.post('/edit/:id', ProcessEditPage);

// Process Delete Page
// router.get('/delete/:id', AuthGuard, ProcessDeletePage);
router.get('/delete/:id', ProcessDeletePage);

export default router;