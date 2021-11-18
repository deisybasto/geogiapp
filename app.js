const express = require('express');
const app =express();
var path = require('path');
const Server = require('./config/local/server');

app.use(express.static('public'));

const server = new Server();


server.listen();

