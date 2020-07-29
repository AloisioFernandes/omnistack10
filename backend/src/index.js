const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack.ycdjk.mongodb.net/semana10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors()) //libera acesso externo para todo tipo de aplicação
app.use(express.json())
app.use(routes) //usa rotas criadas em routes.js

server.listen(3333)