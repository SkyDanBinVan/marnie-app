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
const userModel = {
    name: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg : "User must have name."
            },
        }
    },
    email: {
        type: sequelize.STRING,
    },
    points: {
        type: sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    tokens: {
        type: sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    isFollower: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    isSubscriber: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}
const codeModel = {
    code: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "Must contain code."
            }
        }
    },
    isSent: {
        type: sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        validate: {
            notNull: {
                msg: "isSent must have value."
            }
        }
    }
}
const setModel = {
    title: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Must contain title."
            }
        }
    }
}
module.exports = { commandModel, userModel, codeModel, setModel }