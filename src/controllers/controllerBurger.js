const modelBurger = require("../models/modelBurger");

class Burger {
    async todosSabores(req, res) {
        const todosSabores = await modelBurger.find()
        res.json(todosSabores) 
    }

    async filtrarNome(req, res) {
        const dado = req.body.nome
        const filtrarNome = await modelBurger.find({nome: dado})
        res.json(filtrarNome)
    }

    async filtrarCodigo(req, res) {
        const cod = req.body.codigo
        const filtrarCodigo = await modelBurger.find({codigo: cod})
        res.json(filtrarCodigo)
    }

    async cadastrar(req, res) {
        const infor = req.body
        const novoBurger = await modelBurger.create(infor)
        res.json({mensagem: `O produto ${novoBurger.nome} foi cadastrado.`})
    }
}

const controllerBurger = new Burger;

module.exports = controllerBurger;