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



const app = express();
// app.use(authenticateToken)
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/communities', communitiesRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);


module.exports = app;
