/*! 
File Name: Server/routes/auth.js
Student Name: Fred Wong
Date: October 25, 2022
Last Updated: October 26

Routes handling requests related to authentication
*/

import express from 'express';
const router = express.Router();

// Import the Controller Module
import { DisplayLoginPage, ProcessLogoutPage, ProcessLoginPage, ProcessRegisterPage } from '../Controllers/auth';

/* GET (Display) Login page. */
// router.get('/login', DisplayLoginPage);  // Not needed if a front-end is used

/* Display Register page. */
// router.get('/register', DisplayRegisterPage);  // Not needed if a front-end is used


/* Process Login page. */
router.post('/login', ProcessLoginPage);

/* Process Register page. */
router.post('/register', ProcessRegisterPage);

/* Process Logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;