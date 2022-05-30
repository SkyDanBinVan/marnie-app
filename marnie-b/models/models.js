const sequelize = require('sequelize');

const commandModel = {
    name: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg : "Command must have name."
            }
        }
    },
    description: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg : "Command must have description."
            }
        }
    },
    notes: {
        type: sequelize.STRING
    },
    cooldown: {
        type: sequelize.STRING
    },
    header: {
        type: sequelize.STRING
    }
}
module.exports = { commandModel }