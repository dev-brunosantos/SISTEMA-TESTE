const mongoose = require('mongoose');

const Burger = mongoose.Schema({
    nome: String,
    descricao: String,
    preco: String,
    codigo: String
})

const modelBurger = mongoose.model('burger', Burger);

module.exports = modelBurger;