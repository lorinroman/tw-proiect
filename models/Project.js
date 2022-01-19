
const {DataTypes} = require('sequelize');
const sequelize = require('../sequelize');

const Project = sequelize.define('Project',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:DataTypes.STRING,
    deadlineDate:DataTypes.DATE
    
    /*deadlineIds:{
        type:DataTypes.ARRAY(DataTypes.INTEGER)
    },
    hasMark:DataTypes.BOOLEAN,
    memberIds:{
        type:DataTypes.ARRAY(DataTypes.INTEGER)
    }*/
})

module.exports = Project