const express = require('express')
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack.ycdjk.mongodb.net/semana10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes) //usa rotas criadas em routes.js

app.listen(3333)