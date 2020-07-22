const mongoose = require('mongoose')

const PointSchema = new mongoose.Schema({ //verificar documentação do mongoose
    type: {
        type: String,
        enum: ['Point'], //validador
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    }
})

module.exports = PointSchema