const express = require('express')
const logger = require('morgan')
const cors = require('cors')

// Middleware will be required here

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(logger('dev'))

// Middleware will be used here

// Routes
        //testing if server is working/running!
app.get('/', (request, response) => {
    response.send({ msg: 'Server Running' })
  })
  // controller is imported
  const catController = require('./controllers/CatController.js')

  app.get('/cats', catController.getCats)

  app.get('/cats')


app.listen(PORT, () => console.log(`Server running on ${PORT}`))