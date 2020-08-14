const express = require('express');
// const { Router } = require('express');
const User = require('../models/student');
// const mongoose = require('mongoose')
// mongoose.set('useFindAndModify', false)
const studentController = require('../controllers/student')
const routes = express.Router();

//Adding new student
routes.post('/', studentController.create);
//Reading all students
routes.get('/', studentController.getAll);
//Reading student by using id
routes.get('/:id', studentController.getById);
//Updating information using id
routes.put('/:id', studentController.updateById);
//Deleting student by using id
routes.delete('/:id', studentController.deleteById);

module.exports = routes