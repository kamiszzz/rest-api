const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
//buscando a biblioteca instalada

const rotaVideos = require('./routes/videos')
const rotaCategorias = require('./routes/categorias')

app.use(morgan('dev'))
//o morgan entra na rota que foi chamada
app.use(bodyParser.urlencoded({ extended: false})) //apenas dados simples
app.use(bodyParser.json()) //somente formato json de entrada no body

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //o * significa todos || todos possuem acesso 
    res.header(
        'Access-Control-Allow-Header', 
         'Origin, X-Requested-With, Content-Type, Accept, Authorization',
          ) // o que vamos aceitar de cabeçalho?

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({});
    }
    next();
})

app.use('/videos', rotaVideos)
app.use('/categorias', rotaCategorias)


// request, responsive, next (chama um metodo)
// app.use('/teste', (req, res, next) => {
//     res.status(200).send({
//         mensagem: 'OK, DEU CERTO'
//     })
// })


//tratamento para quando o morgan não encontrar nenhuma rota 
app.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    //se não for o error.status(404) ou 500 
    return res.send({
        erro: {
            mensagem: error.message 
        }
    })
})


module.exports = app