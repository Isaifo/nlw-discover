const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs') // o responsável pela view engine será o 'ejs'

server.use(express.static("public")) //utilização de arquivos styles

server.set('views', path.join(__dirname, 'views'))

server.use(route)

server.listen(3000, () => console.log("BOA TA RODANDO"))