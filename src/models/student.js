const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const infoSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    college: {
        type: String,
        required: true,
        trim: true
    },
    grades: {
        type: Number,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.model('Student', infoSchema)