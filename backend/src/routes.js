const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);


module.exports = routes;

/* 
    Entities
        - ONG
        - Incident

    Functionalities
        - ONG:
            - ONG register
            - Login
            - Logout
            - Incident register
            - Delete incident
            - List ong incidents
            - List all incidents
            - Get in touch

    Knex: migrations

        npx knex migrate:make migration_name
        npx knex migrate:latest
*/