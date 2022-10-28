/* 
File Name: app.js
Student Name: Fred Wong
Student ID: 301199984 
Date: October 3, 2022

/app.js
*/

// Installed third-party packages
import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Import DB package
import mongoose from 'mongoose';

// Impoer the router data
import indexRouter from '../routes/index';
import businessContactsRouter from '../routes/business-contacts';
import usersRouter from '../routes/users';

const app = express();

// Complete the DB Configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.LocalURI);
const db = mongoose.connection; // Alias for the Mongoose connection

// Listen for Connections or Errors
db.on("open", function () {
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

db.on("error", function () {
  console.error(`Connection Error`)
});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');  // Set when using express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);
app.use('/', businessContactsRouter)
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});

export default app;
