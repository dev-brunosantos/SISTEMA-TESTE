const { Router } = require('express');
const controllerPedidos = require("../src/controllers/constrollerPedidos");

const routesPedidos = Router();

routesPedidos
    .get('/pedidos/todos', controllerPedidos.todosPedidos)
    .get('/pedidos', controllerPedidos.filtrarPedidoMesa)
    
    .post('/pedidos/novo', controllerPedidos.novoPedido)

module.exports = routesPedidos;


