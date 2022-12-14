/*! 
File Name: Server/Config/app.js
Student Name: Fred Wong
Student ID: 301199984 
Date: October 3, 2022
Last Updated: October 26

Main business logic of the web application
*/

// Installed third-party packages
import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// Import DB package
import mongoose from 'mongoose';

// Import Authentication modules
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

// Import modules for JWT support
import cors from 'cors';

// Define authentication objects
let localStrategy = passportLocal.Strategy; // Alias

// Import User model for authentication
import User from '../Models/user';

// Import the router data
import indexRouter from '../routes/index';  // Top-level routes
import businessContactsRouter from '../routes/business-contacts';  // business-contact routes
import authRouter from '../routes/auth';  // Authentication routes
import usersRouter from '../routes/users';

const app = express();

// Complete the DB Configuration
import * as DBConfig from './db';
// Specify RemoteURI for remote/cloud connection, otherwise, try LocalURI
mongoose.connect(DBConfig.RemoteURI || DBConfig.LocalURI);
const db = mongoose.connection; // Alias for the Mongoose connection

// Listen for Connections or Errors
db.on("open", function () {
  console.log(`Connected to MongoDB at: ${(DBConfig.RemoteURI) ? DBConfig.HostName : "localhost"}`);
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

// Configure cors (Adds CORS (cross-origin resource sharing) to the config)
app.use(cors());

// Set up express session for authentication
app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false
}));

// Set up Flash for authentication
app.use(flash());

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Implement the Authentication Strategy
passport.use(User.createStrategy());

// Set up User serialization and deserialization (encoding and decoding)
passport.serializeUser(User.serializeUser());   // IMPORTANT: Modified index.d.ts in @types passport-local-mongoose Line 38 serializeUser(): (user: T ... & Line 94 plugin: (schema: PassportLocalSchema ...
passport.deserializeUser(User.deserializeUser());

// Use routes
app.use('/', indexRouter);
app.use('/', businessContactsRouter);
app.use('/', authRouter);
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
