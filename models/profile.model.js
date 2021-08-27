const { Model, DataTypes} = require('sequelize');
const sequelize = require('../lib/sequelize');
const User = require('./user.model');

const Profile = sequelize.define('Profile', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    /* userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "userId"
        }
    }, */
})

Profile.belongsTo(User);

/* Profile.associate = (models) => {
    Profile.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
    })
} */

Profile.sync();

module.exports = Profile;
