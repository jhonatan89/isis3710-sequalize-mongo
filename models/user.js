const { Model, DataTypes} = require('sequelize');
const sequelize = require('../lib/sequelize');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

User.sync();

module.exports = User;
