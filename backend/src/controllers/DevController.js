const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
const { findConnection, sendMessage } = require('../websocket')

module.exports = {
    async index(request, response) {
        const devs = await Dev.find()

        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body
    
        let dev = await Dev.findOne({ github_username }) //verifica se já existe um dev com esse github username no banco de dados

        if(!dev) { //cadastra novo dev se não existir
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
        
            const { name=login, avatar_url, bio } = apiResponse.data
        
            const techsArray = parseStringAsArray(techs)
        
            const location = {
                type: 'Point', //verificar PointSchema
                coordinates: [longitude, latitude], //padrão mongo, primeiro longitude segundo latitude
            }
        
            dev = await Dev.create({ //Criar e armazena Dev no banco de dados
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

            const sendSocketMessageTo = findConnection( //filtra conexões
                {latitude, longitude},
                techsArray,
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev)
        }
    
        return response.json(dev) //mostra usuário cadastrado no Insomnia
    }
}