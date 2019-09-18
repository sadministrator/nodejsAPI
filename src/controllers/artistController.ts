import { Router } from 'express'
const Artist = require('../models/artist')

export const artistRouter = Router()

artistRouter.delete('/:id', async(req, res) => {
    const a = req.params.id

    res.status(200).json({msg: 'artist ' + a + ' deleted.'})
})

artistRouter.post('/', async(req, res) => {
    const a = req.body

    if(!a.name) {
        res.status(400).json({})
        return
    }
    res.status(200).json({msg: 'Nothing to see here.'})
})

artistRouter.get('/', async(req, res) => {
    console.log(req.params.name)
    // TODO search for artist by id on DB

    if(req.params.id === '111') {
        res.status(200).json({msg: 'Nothing to see here.'})
    } else {
        res.status(400).json({error: 'Artist not found.'})
    }
})

