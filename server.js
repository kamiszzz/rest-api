//cria um serviço http, estamos importando ele para o nosso projeto 
const http = require('http');

//pega o app
const app = require('./app')

//define uma porta padrão e armazena ela 
const port = process.env.PORT || 3000;

//e cria o server
//passa o app dentro do server e escutando ele na porta
//estou passando para o server todo conteúdo que está sendo exportado do app.js
const server = http.createServer(app);
server.listen(port);

//entrou no metodo e criou o server e deu um responsive 