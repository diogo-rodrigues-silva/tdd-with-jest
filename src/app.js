'use strict';

const express = require('express');
const routers = require('./routes');

class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(routers);
    }
}

module.exports = new AppController().express;