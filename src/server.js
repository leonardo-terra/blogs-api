require('dotenv').config();
const express = require('express');
const app = require('./api');
const User = require('./controllers/user.controllers');
const Auth = require('./controllers/auth.controllers');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;
app.use(express.json());

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.get('/users', User.getUsers);

app.post('/login', Auth.login);

app.listen(port, () => console.log('ouvindo porta:', port));
