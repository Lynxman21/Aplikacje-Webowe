//Sequelize configuration. It is used to write object and then convert them to tables. It is ORM tool. We have to install sequelize
const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite'
});

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false //is creating additional two collumn (createdAt and uptadedAt)
});

module.exports = {sequelize,User}