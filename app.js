const path = require('path');
const express = require('express');
// const flash = require('connect-flash');

const cookieParser = require('cookie-parser');

const app = express();

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

// LOAD IN ROUTES
const viewRouter = require('./routes/viewRoutes');

// VIEW ENGINE
app.set('view engine', 'ejs');
// VIEWS FOLDER
app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE

// Flash messages
// app.use(flash());

//Body parser, for reading data from req.body
app.use(express.urlencoded({
    extended: false
}));
// Reading JSON
app.use(express.json({limit: '10kb'}));
// Cookie parser
app.use(cookieParser());

// Static files folder
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES   
app.use('/', viewRouter);


// Catch all route handling
app.all('*', (req, res, next)=> {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware, 4 parameters tell express this is 
// an error handling middleware
app.use(globalErrorHandler);

module.exports = app;

