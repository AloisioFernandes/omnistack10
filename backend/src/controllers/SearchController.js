const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({ //filtros para busca em banco de dados
            techs: {
                $in: techsArray, //verifica se usuário tem techs dentro de techsArray, $in é um operador lógico
            },
            location: {
                $near: { //operador lógico do mongo para verificar proximidade em distância
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        })

        return response.json({devs})
    }
}