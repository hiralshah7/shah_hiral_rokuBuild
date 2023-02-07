const express = require('express');
const router = express.Router();


// bringing in the mysql module
const sql = require('mysql');
// two dots because we are going back to the root folder
const creds = require('../config/user');

// create sql conncetion poo; 
var pool = sql.createPool(creds);




// it is a endpoint ,  res.json takes a json object and sends it back to the client
// get request to the root of the api
router.get('/', (req, res) => {
    res.json({ message: 'hit the main UMS Route' });

});

// get all the users

router.get('/users', (req, res) => {
    // try to query the database and get all the users
    // copying and pasting from the mysql https://www.npmjs.com/package/mysql

    // this is the user id

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM users', function (error, results) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
          res.json(results);
        });
      });


  

});

// get a single user
// try to query the database and get all the users
// this is the user id
router.get('/users/:user', (req, res) => {
    // try to query the database and get all the users
    // copying and pasting from the mysql https://www.npmjs.com/package/mysql
 
    console.log(req.params.user);
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query(`SELECT * FROM users WHERE id = ${req.params.user}`, function (error, results) {
            // when done with the connection, release it
            connection.release();

            // handle error after the release
            if (error) throw error;

            // don't use the connection here, it has been returned to the pool
            res.json(results);
        });
    });
});



// export the router 
module.exports = router;
