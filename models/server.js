const cors = require('cors');
const express = require('express');


class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.path = '/api';
        this.pathLogin = '/api/login';
        this.pathUser = '/api/user';
        this.pathDocument = '/api/document'
        this.middelwares();
        this.routes();

    }

    middelwares(){
        this.app.use(cors());

        //uso de archivos json 
         this.app.use((express.json({limit: '50mb'})));
         this.app.use(express.urlencoded({limit: '50mb'}));

    }

    routes(){
       this.app.use(this.pathLogin,require('../routes/login'));
        this.app.use(this.pathUser,require('../routes/users'));
        this.app.use(this.pathDocument,require('../routes/document'));
    }

    Listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en : http://localhost:${this.port}/api`);
        })
    }

}

module.exports =  Server;