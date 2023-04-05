const mongoose = require('mongoose');

const Sushi = mongoose.Schema({
    nome: String,
    descricao: String,
    preco: String,
    codigo: String
})

const modelSushi = mongoose.model('sushi', Sushi);

module.exports = modelSushi;