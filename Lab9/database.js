// Nikolai Alexander
// Jack Huggard
// Phat Vuong
// Lab 9 - Basic CRUD operations using Node.js

// pg-promise (pgp) is a Node.js package/library which allows you to programmatically connect and run queries on a PostgreSQL database!
// dbConfig is an Object (key-value pairs) that houses information of the PostgreSQL database you want to connect to.
var pgp = require('pg-promise')();

const dbConfig = {
   host: 'localhost',
   port: 5432,
   database: 'lab6',
   user: 'jackhuggard',
   password: 'Penguin7060' // TODO: Fill in your PostgreSQL password here.
                // Use empty string if you did not set a password
};

var​ dbConfig = process.env.DATABASE_URL;

module.exports = db;