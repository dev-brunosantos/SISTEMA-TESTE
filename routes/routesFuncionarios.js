const { Router } = require('express');
const controllerFuncionarios = require("../src/controllers/controllerFuncionario");

const routesFuncionarios = Router()

routesFuncionarios
    .get('/funcionarios/todos', controllerFuncionarios.todos)
    .get('/funcionarios', controllerFuncionarios.filtrarNome)

    .post('/funcionarios/cadastrar', controllerFuncionarios.cadastrar)

module.exports = routesFuncionarios;
