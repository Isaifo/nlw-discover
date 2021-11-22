const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const questionController = require('./controllers/QuestionController')
const route = express.Router() // route possui todas as funcionalidades de rotas que o express contem

route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

// Formato que o formulario de dentro da modal deva passar a informação
 route.post('/room/:room/:question/:action',QuestionController.index ) // passando o Question controller pela rota


module.exports = route