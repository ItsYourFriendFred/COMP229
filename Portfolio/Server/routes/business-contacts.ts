import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import { DisplayAddPage, DisplayBusinessContacts, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/business-contacts'

// Display Business Contacts Page
router.get('/business-contacts', AuthGuard, DisplayBusinessContacts);

// Display Add Page
router.get('/add', AuthGuard, DisplayAddPage);


// Display Edit Page
router.get('/edit/:id', AuthGuard, DisplayEditPage);


// Process Add Page
router.post('/add', AuthGuard, ProcessAddPage);

// Process Edit Page
router.post('/edit/:id', AuthGuard, ProcessEditPage);

// Process Delete Page
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

export default router;