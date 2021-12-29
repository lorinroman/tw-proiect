const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:"./sqlite/database.db"
})

sequelize.sync({alter:true}).then(()=>{
    console.log('All models were syncronized successfully');
})

module.exports = sequelize;