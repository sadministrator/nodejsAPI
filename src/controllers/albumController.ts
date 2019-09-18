import { Router } from 'express'
const Album = require('../models/album')

export const albumRouter = Router()

albumRouter.delete('/:id', async(req, res) => {
    const a = req.params.id

    res.status(200).json({'msg': 'album ' + a + ' deleted.'})
})

albumRouter.post('/', async(req, res) => {
    const a = req.body

    if(!name) {
        res.status(400).json({})
        return
    }
    res.status(200).json({msg: 'Nothing to see here.'})
})

albumRouter.get('/:id', async(req, res) => {
    console.log(req.params.name)
    // TODO search album by name in DB

    if(req.params.id === '222') {
        res.status(200).json({msg: 'Nothing to see here.'})
    } else {
        res.status(400).json({error: 'Author not found.'})
    }
})