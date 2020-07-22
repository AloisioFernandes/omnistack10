const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema({ //estrutura de uma informação no banco de dados
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere' //índice, facilita a busca
    }
})

module.exports = mongoose.model('Dev', DevSchema) //Dev é o nome em que o dado será salvo no banco, DevSchema é seu respectivo schema 