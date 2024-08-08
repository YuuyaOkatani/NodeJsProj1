const route = require('express').Router(); 
const userController = require('../controllers/user.controller')
route.get('/', userController.soma)
 
module.exports = route;  // exportando o módulo do route.js para ser usado em outros lugares.