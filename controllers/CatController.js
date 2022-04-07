const { append } = require("express/lib/response")

const getCats = (request, response) => {
    response.send({
      message: 'Getting Cats'
    })
  }
  getCats.get('/cats', (req, res) => {
      
  })

  module.exports = {
    getCats
  }