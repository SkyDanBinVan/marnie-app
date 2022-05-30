const sequelize = require("sequelize");
const { commandModel } = require("./models/models");

const Sequelize = new sequelize({
    dialect: "sqlite",
    storage: "./sqlite/database.sqlite",
});
const Command = Sequelize.define("Commands", commandModel)


module.exports = { Sequelize, Command };