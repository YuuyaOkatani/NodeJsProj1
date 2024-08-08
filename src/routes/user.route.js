const route = require('express').Router(); 
const userController = require('../controllers/user.controller')
route.get('/user', userController.query)

route.post('/', userController.create)
 
module.exports = route;  // exportando o módulo do route.js para ser usado em outros lugares.