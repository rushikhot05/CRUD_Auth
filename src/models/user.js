const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

// const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if(!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email Address'});
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    }
});

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

module.exports = mongoose.model('User', UserSchema);