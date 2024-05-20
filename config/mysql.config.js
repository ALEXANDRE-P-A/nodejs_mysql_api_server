require("dotenv").config();

module.exports = {
  HOST: process.env.NODE_ENV === "global" ? process.env.MYSQL_HOST : process.env.LOCAL_HOST,
  PORT: process.env.NODE_ENV === "global" ? process.env.MYSQL_PORT : process.env.LOCAL_PORT,
  USERNAME: process.env.NODE_ENV === "global" ? process.env.MYSQL_USERNAME : process.env.LOCAL_USER,
  PASSWORD: process.env.NODE_ENV === "global" ? process.env.MYSQL_PASSWORD : process.env.LOCAL_PASS,
  DATABASE: process.env.NODE_ENV === "global" ? process.env.MYSQL_DATABASE : process.env.LOCAL_DBS,
  CONNECTION_LIMIT: process.env.MYSQL_CONNECTION_LIMIT ? 
    parseInt(process.env.MYSQL_CONNECTION_LIMIT) : 10,
  QUEUE_LIMIT: process.env.MYSQL_QUEUE_LIMIT ? 
    parseInt(process.env.MYSQL_QUEUE_LIMIT) : 0
};