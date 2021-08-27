const { Model, DataTypes} = require('sequelize');
const sequelize = require('../lib/sequelize');
const Profile = require('../models/profile.model');



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
        allowNull: true
    }
})

/* User.hasOne(Profile, {
    onDelete: 'cascade'
}) */

/* User.associate = (models) => {
    User.hasOne(models.Profile, {foreignKey: 'ID', as: 'user'});
}; */



User.sync();

module.exports = User;
