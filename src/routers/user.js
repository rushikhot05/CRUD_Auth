const express = require('express')
const routes = express.Router();
const userController = require('../controllers/user');

routes.post('/authenticate', userController.authenticate)
routes.post('/register', userController.create)

module.exports = routes