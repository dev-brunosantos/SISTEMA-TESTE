const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://dukasushi:brunosds@duka-sushi.aciwtmi.mongodb.net/?retryWrites=true&w=majority"
)
.then(console.log('A conexão com o Bando de Dados foi realizada com sucesso.'))

const conexao = mongoose.connection;

module.exports = conexao;