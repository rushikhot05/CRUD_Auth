const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model('Student', studentSchema)