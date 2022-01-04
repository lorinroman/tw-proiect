
const {DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

const Project = sequelize.define('Project',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:DataTypes.STRING,
    deadlineIds:{
        type:DataTypes.ARRAY(DataTypes.INTEGER)
    },
    hasMark:DataTypes.BOOLEAN,
    memberIds:{
        type:DataTypes.ARRAY(DataTypes.INTEGER)
    }
})
