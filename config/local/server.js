require('dotenv').config();
const express = require('express');
const route  = require('../../routes/routes')
const port = process.env.PORT || 8000


module.exports = class Server {

    constructor() {
        this.app = express();
        this.port = port;
        this.ownRoute = route;
        this.router = express.Router();
        this.middlewares();
        this.routes();

    }

    middlewares() {
        this.app.use(express.static('public'));

    };

    routes() {

        this.app.use( '/v1', this.ownRoute);
        
    };


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${port}
                 ${this.routes()}`)

        });

    }
}
