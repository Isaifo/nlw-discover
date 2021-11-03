const express = require('express')

const route = express.Router() // route possui todas as funcionalidades de rotas que o express contem

route.get('/', (req, res) => res.render("index"))


module.exports = route