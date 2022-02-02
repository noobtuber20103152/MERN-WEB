const mongoose = require('mongoose')
const { Schema } = mongoose
const userschema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const blog = mongoose.model('blog-content', userschema);
module.exports = blog;