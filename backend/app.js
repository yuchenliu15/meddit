const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { authenticateToken } = require('./middleware/auth')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const communitiesRouter = require('./routes/communities');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const illnessesRouter = require('./routes/illnesses');

const cors = require('cors');




const app = express();
// app.use(authenticateToken)
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.options('*', cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/communities', communitiesRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/illnesses', illnessesRouter);


module.exports = app;
