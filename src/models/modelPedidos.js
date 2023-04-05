const mongoose = require('mongoose');

const dadosPedidos = mongoose.Schema({
    mesa: String,
    produto: String,
    preco: String,
    quantidade: String,
    atendente: String,
    data: String,
    hora: String
})

const modelPedidos = mongoose.model('Pedidos', dadosPedidos);

module.exports = modelPedidos;