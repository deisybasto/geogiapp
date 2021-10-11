
const e = require('express');
const Server = require('./config/local/server');
const route  = require('./routes/routes');
const router = e.Router();

const server = new Server();

router.use('/v1',route)

server.listen();