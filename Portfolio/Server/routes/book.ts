import express from 'express';
const router = express.Router();
let mongoose = require('mongoose');

import jwt from 'jsonwebtoken';

import passport from 'passport';

import { DisplayAddPage, DisplayBookList, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../controllers/book';

import { AuthGuard, EditGuard } from '../Util';  // Replaced by protecting entire route with JWT


/* GET Route for the Book List page - READ Operation */
router.get('/', DisplayBookList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', AuthGuard, DisplayAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/', AuthGuard, EditGuard);
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', AuthGuard, ProcessAddPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

export default router;