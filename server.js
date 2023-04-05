const conexao = require("./database/mongoDB");
const app = require("./src/app");

const port = 3000;
const url = `http://localhost:${port}`;

conexao;

app.listen(port, ()=> console.log(`Servidor rodando em: ${url}`));