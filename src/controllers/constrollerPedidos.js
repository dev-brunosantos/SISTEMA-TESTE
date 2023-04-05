const modelPedidos = require("../models/modelPedidos");

class Pedidos {
    async todosPedidos(req, res) {
        const pedidosRealizados = modelPedidos.find()
        res.json(JSON.parse(pedidosRealizados))
    }

    async filtrarPedidoMesa(req, res) {
        const cliente = req.body.mesa 
        const filtrarMesa = await modelPedidos.find({mesa: cliente})
        res.json(filtrarMesa)
    }

    async filtrarPedidoData(req, res) {
        const diaPedido = req.body.data
        const filtrarPedidoData = await modelPedidos.find({data: diaPedido})
        res.json(filtrarPedidoData)
    }

    async novoPedido(req, res) {
        const infor = req.body
        const novoPedido = await modelPedidos.create(infor)
        res.json(novoPedido)
    }
}

const controllerPedidos = new Pedidos;

module.exports = controllerPedidos;