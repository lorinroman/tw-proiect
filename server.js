
import User from './models/User'

const cors = require('cors')
const express = require('express')
const sequelize = require("./Database/sequelize")

const app = express();
app.use(cors())
app.use(express.json())
const port = 3000

app.listen(port, () => {
  console.log("The server is running on http://localhost:" + port);
});

app.get('/create', async (req, res, next) => {
    try {
      await sequelize.sync({ force: true })
      res.status(201).json({ message: 'database created' })
    } catch (err) {
      next(err)
    }
  })

  app.get('/users', async (req, res, next) => {
    try {
      const users = await User.findAll()
      res.status(200).json(users)
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
  
  app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'server error' })
  })
  


