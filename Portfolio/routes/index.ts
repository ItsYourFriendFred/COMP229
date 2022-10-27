/* 
File Name: index.js
Student Name: Fred Wong
Student ID: 301199984 
Date: October 3, 2022

routes/index.js
*/

import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home'});
});

/* GET home page, in case /home is attempted */
router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home'});
});

/* GET About Me page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('about', { title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('services', { title: 'Services'});
});

/* GET Contact page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('contact', { title: 'Contact'});
});

export default router;
