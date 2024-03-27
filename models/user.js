const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",

        }
    ]
},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model('user', authSchema)