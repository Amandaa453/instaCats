const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_cats", "root", "Sen@iDev77!.", {
    host: "127.0.0.1",
    port: "3307",
    dialect: "mysql"
});

module.exports = sequelize;