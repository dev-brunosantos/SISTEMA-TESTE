const modelFuncionarios = require("../models/modelFuncionario");

class Funcionarios {
    async todos(req, res) {
        const todosUsuarios = await modelFuncionarios.find();
        res.json(todosUsuarios)
    }

    async filtrarNome(req, res) {
        const dado = req.body.nome
        const nomeFuncionario = await modelFuncionarios.find({nome: dado})
        res.json(nomeFuncionario)
    }

    async cadastrar(req, res) {
        const corpo = req.body
        const novoFuncionario = await modelFuncionarios.create(corpo)
        res.json({mensagem: `O funcionário ${novoFuncionario.nome} foi cadastrado com sucesso`})
    }
}

const controllerFuncionarios = new Funcionarios;

module.exports = controllerFuncionarios;