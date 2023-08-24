const Sequelize = require("sequelize");
const sequelize = require("../../config/database");

const prog = sequelize.define(
  "prog",
  {
    Timestamp: { type: Sequelize.BIGINT },
    Programname: { type: Sequelize.STRING },
    Materialnumber: { type: Sequelize.INTEGER },
    Serialnumber: { type: Sequelize.INTEGER },
    Operation: { type: Sequelize.STRING },
    M190: { type: Sequelize.SMALLINT },
    M191: { type: Sequelize.SMALLINT },
    M192: { type: Sequelize.SMALLINT },
  },
  {
    tableName: "prog",
    createdAt: false,
    updatedAt: false,
  }
);
prog.removeAttribute("id"); //ignore id, no primary key in DB

module.exports = prog;
