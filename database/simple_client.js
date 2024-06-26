const { promisify } = require("util");
const path = require("path");
const { sql } = require("@garafu/mysql-fileloader")({ root: path.join(__dirname, "./sql") });
const config = require("../config/mysql.config.js");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: config.HOST,
  port: config.PORT,
  user: config.USERNAME,
  password: config.PASSWORD,
  database: config.DATABASE
});

const simpleClient = {
  connect: promisify(con.connect).bind(con),
  query: promisify(con.query).bind(con),
  end: promisify(con.end).bind(con)
};

module.exports = { simpleClient, sql };