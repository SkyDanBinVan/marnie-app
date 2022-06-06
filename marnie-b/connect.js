const sequelize = require("sequelize");
const { commandModel, userModel, codeModel, setModel } = require("./models/models");

const Sequelize = new sequelize({
    dialect: "sqlite",
    storage: "./sqlite/database.sqlite",
});
const Command = Sequelize.define("Commands", commandModel)
const User = Sequelize.define("User", userModel);
const Code = Sequelize.define("Code", codeModel);
const Set = Sequelize.define("Set", setModel);

User.hasMany(Code);
Code.belongsTo(User);
Set.hasMany(Code);
Code.belongsTo(Set);

module.exports = { Sequelize, Command, User, Code, Set };