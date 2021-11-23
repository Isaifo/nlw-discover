const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() // route possui todas as funcionalidades de rotas que o express contem

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create )
route.get('/room/:room', RoomController.open)

route.post('/question/create/:room', QuestionController.create)
// Formato que o formulario de dentro da modal deva passar a informação
 route.post('/question/:room/:question/:action',QuestionController.index ) // passando o Question controller pela rota


module.exports = route