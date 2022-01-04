const cors = require('cors')
const express = require('express')
const sequelize = require('./sequelize')
const User = require('./models/User')

const app = express()
app.use(cors())
app.use(express.json())
const port = 8080

app.listen(port, () => {
  console.log("The server is running on http://localhost:" + port);
});

app.get('/create', async (req, res, next) => {
    try {
      await sequelize.sync({ force: true })
      const sampleData = [{
        username: 'first-user',
        fullName: 'Mihai',
        password:'abc',
        type: 'student'
      }, {
        username: 'second-user',
        fullName: 'Andrei',
        password:'abc',
        type: 'professor'
      }, {
        username: 'third-user',
        fullName: 'Alex',
        password:'abc',
        type: 'student'
      }]
      for (const item of sampleData) {
        const user = new User(item)
        await user.save()
      }
      res.status(201).json({ message: 'database created' })
    } catch (err) {
      next(err)
    }
  })

  app.get('/users', async (req, res, next) => {
    try {
      const users = await User.findAll()
      if(req.query.username){
        const user = users.filter(x=>x.username == req.query.username)
        res.status(200).json(user)
      }else{
        res.status(200).json(users)
      }
    } catch (err) {
      next(err)
    }
  })

  app.post('/users', async (req, res, next) => {
    try {
      const user = await User.create(req.body)
      res.status(201).json(user)
    } catch (err) {
      next(err)
    }
  })
  
  /*app.get('/users/:userId', async (req, res, next) => {
    try {
      const queryId = req.params.userId;
      const user = await User.findAll({
        where:{
          id: userId
        }
      })
      if(user){
        res.status(201).json(user)
      }
    } catch (err) {
      next(err);
    }
  });
*/

  app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'server error' })
  })
  


