const mongoose = require('mongoose');

const Funcionarios = mongoose.Schema({
    nome: String,
    senha: String,
    funcao: String,
})

const modelFuncionarios = mongoose.model('funcionarios', Funcionarios);

module.exports = modelFuncionarios;