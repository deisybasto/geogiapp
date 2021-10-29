require('dotenv').config();
const express = require('express');
const route  = require('../../routes/routes')
const cors = require('cors');
const port = process.env.PORT || 8000

const { dbConnection } = require('../database/config')


module.exports = class Server {

    constructor() {
        this.app = express();
        this.port = port;
        this.ownRoute = route;

        this.conectarDB();
        this.router = express.Router();
        this.middlewares();
        this.routes();

    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
          // CORS
          this.app.use( cors() );

          // Lectura y parseo del body
          this.app.use( express.json() );
  
          // Directorio Público
          this.app.use( express.static('public') );
    };

    routes() {

        this.app.use( '/v1', this.ownRoute);
        
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${port}`)

        });

    }
}
