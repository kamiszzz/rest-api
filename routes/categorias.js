const express = require('express')
const router = express.Router()

// RETORNA TODAS AS CATEGORIAS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todas as categorias'
    })
})

// INSERE UMA CATEGORIA
router.post('/', (req, res, next) => {
    const categoria = {
        titulo: req.body.titulo,
        cor: req.body.cor
    }
    res.status(201).send({
        mensagem: 'Categoria inserida',
        categoriaCriada: categoria
    })
})

router.get('/:id_videos', (req, res, next) => {
    const id = req.params.id_categoria

    res.status(200).send({
        mensagem: 'Retorna uma categoria exclusiva',
        id_categoria: id
    })
})

//ALTERA UMA CATEGORIA

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Altera uma categoria'
    })
})

//EXCLUI UMA CATEGORIA
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Deleta uma categoria'
    })
})

module.exports = router;