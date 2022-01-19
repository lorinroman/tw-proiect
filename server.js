const cors = require('cors')
const express = require('express')
const sequelize = require('./sequelize')
const User = require('./models/User')
const Project = require('./models/Project')


const app = express()
app.use(cors())
app.use(express.json())
const port = 8080

app.listen(port, () => {
  console.log("The server is running on http://localhost:" + port);
});

//for users
app.get('/createUsers', async (req, res, next) => {
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
      res.status(201).json({ message: 'users created' })
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
  
  app.get('/users/:userId', async (req, res, next) => {
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

  app.put('/users/update/:id', async(req,res,next)=>{
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        const userUpdate = await User.update(req.body);
        res.status(200).json(userUpdate);
      } else {
        res.status(404).json({ message: "Error!" });
      }
    } catch (err) {
      next(err);
    }
  });


//for projects
app.get('/createProjects', async (req, res, next) => {
  try {
    await sequelize.sync({ force: true })
    const sampleData = [{
      name: 'project1',
      deadlineDate: Date.parse('15-03-2022')
    }, {
      name: 'project2',
      deadlineDate: Date.parse('25-03-2022')
    } 
    ]
    for (const item of sampleData) {
      const project = new Project(item)
      await project.save()
    }
    res.status(201).json({ message: 'projects created' })
  } catch (err) {
    next(err)
  }
})

app.get('/projects', async (req, res, next) => {
  try {
    const projects = await Project.findAll()
    if(req.query.name){
      const project = projects.filter(x=>x.name == req.query.name)
      res.status(200).json(project)
    }else{
      res.status(200).json(projects)
    }
  } catch (err) {
    next(err)
  }
})

app.post('/projects', async (req, res, next) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (err) {
    next(err)
  }
})

app.get('/projects/:projectId', async (req, res, next) => {
  try {
    const queryId = req.params.userId;
    const project = await Project.findAll({
      where:{
        id: projectId
      }
    })
    if(project){
      res.status(201).json(project)
    }
  } catch (err) {
    next(err);
  }
});


app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'server error' })
})

  


