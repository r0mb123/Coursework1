const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks_db', 'postgres', '    ', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;
