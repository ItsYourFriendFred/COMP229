/* 
File Name: index.js
Student Name: Fred Wong
Student ID: 301199984 
Date: October 3, 2022

routes/index.js
*/

import express from 'express';
const router = express.Router();

// Import the Controller Module
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../Controllers/index';

/* GET (Display) home page. */
router.get('/', DisplayHomePage);

/* GET home page, in case /home is attempted */
router.get('/home', DisplayHomePage);

/* GET About Me page. */
router.get('/about', DisplayAboutPage);

/* GET Projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET Services page. */
router.get('/services', DisplayServicesPage);

/* GET Contact page. */
router.get('/contact', DisplayContactPage);

export default router;
