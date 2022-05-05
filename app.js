const express = require('express');
const app = express();
const morgan = require('morgan');
//buscando a biblioteca instalada

const rotaVideos = require('./routes/videos')
const rotaCategorias = require('./routes/categorias')

app.use(morgan('dev'))
//o morgan entra na rota que foi chamada
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