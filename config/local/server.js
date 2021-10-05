require('dotenv').config();
const express = require('express')
const port = process.env.PORT || 3000


module.exports = class Server {

    constructor() {
        this.app = express();
        this.port = port;
        this.routes;
       
    }

    routes(){
        //ruta de la api
        this.app.get('/', (req,res) =>{
            res.send('hello world')

        });
    }

    middlewares () {

    }

    listen(){
        this.app.listen( this.port,() =>{
            console.log(`Example app listening at http://localhost:${port}`)
        });

    }
}
