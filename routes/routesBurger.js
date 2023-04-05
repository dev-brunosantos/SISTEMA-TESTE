const { Router } = require('express');

const controllerBurger = require("../src/controllers/controllerBurger");

const routesBurgers = Router();

routesBurgers
    .get('/burger/todos', controllerBurger.todosSabores)
    .get('/burger', controllerBurger.filtrarNome)
    .get('/burger', controllerBurger.filtrarCodigo)
    
    .post('/burger/cadastrar', controllerBurger.cadastrar)
    
module.exports = routesBurgers;

