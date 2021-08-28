const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('databaseISIS', '', '', {
    dialect: 'sqlite',
    storage: './database/databaseISIS.sqlite'
})

sequelize.authenticate().then(() => console.log('Sequelize works'));


module.exports = sequelize;