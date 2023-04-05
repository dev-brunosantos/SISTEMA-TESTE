const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rotas = require('../routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(rotas.routesFuncionarios)
app.use(rotas.routesBurgers)
app.use(rotas.routesPedidos)

module.exports = app;