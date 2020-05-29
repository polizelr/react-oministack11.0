//import express
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluna: 'Rafaela Polizel'
    });
});

app.listen(3333);

/* 
    Route / Resource

    HTTP methods: get, post, put, delete
        obs: browsers always run get method

        Get: get an information from backend
        Post: add an information
        Put: update an information
        Delete: delete an information

    Params:
        Query Params: named params send in the url after "?". Usually, it is used to filters and pagination. Two or more query params must be attached using "&". It can be accessed from "request.query".  
        Route Params: params used to identify resources. It identifies only one resource and it is used after ":". It can be accessed from "request.params".         
        Request body: it is used to create or change resources. It can be accessed from "request.body". 

    Databases:
        SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
        NoSQL: MongoDB, CouchDB

        Ways to comunicate with the database:
            Drivers: Select * from users
            Query builder: queries are written using JS. Example: table('users').select('*').where()

            Knex:
                npm i knex --save
                npm i sqlite3

                npx next init        
*/