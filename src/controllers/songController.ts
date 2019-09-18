import { Router } from 'express'
const Song = require('../models/song')

export const songRouter = Router()

songRouter.delete('/:id', async(req, res) => {
    const a = req.params.id

    res.status(200).json({msg: 'song ' + a + ' deleted.'})
})

songRouter.post('/', async(req, res) => {
    const a = req.body

    if(!a.name) {
        res.status(400).json({})
        return
    }
    res.status(200).json({msg: 'Nothing to see here.'})
})

songRouter.get('/', async(req, res) => {
    console.log(req.params.name)
    // TODO search for song by id on DB

    if(req.params.id === '111') {
        res.status(200).json({msg: 'Nothing to see here.'})
    } else {
        res.status(400).json({error: "Song not found."})
    }
})