const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";

//Load the configuration from the config.js
const config = require(`./config.js`)[env];

//Create an empty object which can store our databases
const db = {};

//Extract the database information into an array
const databases = Object.keys(config.databases);

/** Add Databases**/
let database = databases[1];
let dbPath = config.databases[database];
db[database] = new Sequelize(
  dbPath.database,
  dbPath.username,
  dbPath.password,
  dbPath
);

const sequelize2 = db[database];

sequelize2
  .authenticate()
  .then(() => console.log("Connection DB2 has been established successfully."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize2;
