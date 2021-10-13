require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000


module.exports = class Server {

    constructor() {
        this.app = express();
        this.port = port;
        this.cors = cors;
        this.routes();
        this.middlewares();
       
    }

    routes(){
        //ruta de la api
        
    }

    middlewares () {

        //cors
        this.app.use(this.cors());

    }

    listen(){
        this.app.listen( this.port,() =>{
            console.log(`Example app listening at http://localhost:${port}`)
        });

    }
}
