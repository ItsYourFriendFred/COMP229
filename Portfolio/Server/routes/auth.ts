/*! 
File Name: Server/routes/auth.js
Student Name: Fred Wong
Student ID: 301199984 
Date: October 25, 2022
Last Updated: October 26

Routes handling requests related to authentication
*/

import express from 'express';
const router = express.Router();

// Import the Controller Module
import { DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage } from '../Controllers/auth';

/* GET (Display) Login page. */
router.get('/login', DisplayLoginPage);

/* Display Register page. */
router.get('/register', DisplayRegisterPage);


/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process Register page. */
router.post('/register', ProcessRegisterPage);

/* Process Logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;