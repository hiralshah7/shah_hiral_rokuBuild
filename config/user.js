// This file contains the credentials for the database connection
// from here we can export the credentials to the server.js file
// and then we can use the credentials to connect to the database
const sqlcreds = {
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'root', //blamk for the window users
  database        : 'roku_users',
  port : 3306 // 8889 for mac users
};

// export the router
module.exports = sqlcreds;
