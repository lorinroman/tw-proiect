const {DataTypes} = require('sequelize');
const sequelize = require('./Database/sequelize');

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type:DataTypes.TEXT,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING(64)
    },
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    type: {
        type: Sequelize.ENUM,
        values: ['student', 'professor']
    }
})

