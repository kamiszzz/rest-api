const express = require('express')
const router = express.Router()

// RETORNA TODOS OS VIDEOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os videos'
    })
})

// INSERE UM VIDEO
router.post('/', (req, res, next) => {
    const video = {
        titulo: req.body.titulo,
        descricao: req.body.descricao
    }
    res.status(201).send({
        mensagem: 'Video inserido',
        videoCriado: video
    })
})

router.get('/:id_videos', (req, res, next) => {
    const  id = req.params.id_videos

    if (id==='especial'){
      res.status(200).send({
        mensagem: 'Retorna um video exclusivo',
        id: id
    })  
    } else {
        res.status(200).send({
            mensagem: 'VOCÊ PASSOU UM ID'
        })
    }
    
})

//ALTERA UM VIDEO

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Modificações'
    })
})

//EXCLUI UM VIDEO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Deleta um video'
    })
})

module.exports = router;