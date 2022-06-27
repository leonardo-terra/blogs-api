require('dotenv').config();
const express = require('express');
const app = require('./api');
const userController = require('./controllers/user.controllers');
const Auth = require('./controllers/auth.controllers');
const categoryController = require('./controllers/category.controller');
const blogPostController = require('./controllers/blogPost.controller');
const middlewares = require('./middlewares');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;
app.use(express.json());

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.get('/user', middlewares.authentication, userController.getUsers);
app.get('/user/:id', middlewares.authentication, userController.getById);
app.get('/categories', middlewares.authentication, categoryController.getAll);
app.get('/post', middlewares.authentication, blogPostController.getPosts);

app.post('/login', Auth.login);
app.post('/user', userController.create);
app.post('/categories', middlewares.authentication, categoryController.create);
app.post('/post', middlewares.authentication, blogPostController.create);

app.listen(port, () => console.log('ouvindo porta:', port));
