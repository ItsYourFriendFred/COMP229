/*! 
File Name: Server/routes/index.js
Student Name: Fred Wong
Date: October 3, 2022
Last Updated: October 26
Routes handling requests related to public views
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