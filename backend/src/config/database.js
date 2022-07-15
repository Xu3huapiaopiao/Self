const mysql = require("mysql2/promise");
const config = require("./config");

const pool = mysql.createPool({
  host: config.databaseHost,
  user: config.databaseUserName,
  password: config.databasePassword,
  database: config.databaseName,
});

module.exports = pool;