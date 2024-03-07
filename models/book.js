const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    isbns: {
        type: Number,
        required: true
    }
},
    {timestamps: true}
)

module.exports = mongoose.model('Book', bookSchema)