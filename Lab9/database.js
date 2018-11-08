// Nikolai Alexander
// Jack Huggard
// Phat Vuong
// Lab 9 - Basic CRUD operations using Node.js

// pg-promise (pgp) is a Node.js package/library which allows you to programmatically connect and run queries on a PostgreSQL database!
// dbConfig is an Object (key-value pairs) that houses information of the PostgreSQL database you want to connect to.
var pgp = require('pg-promise')();

var​ dbConfig = process.env.DATABASE_URL;

var db = pgp(dbConfig);

module.exports = db;