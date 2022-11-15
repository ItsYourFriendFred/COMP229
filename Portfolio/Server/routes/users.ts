/*! 
File Name: Server/routes/users.js
Student Name: Fred Wong
Date: October 3, 2022
Last Updated: October 26

Currently unused section; for later use when roles are implemented
*/

import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource - placeholder');
});

export default router;
