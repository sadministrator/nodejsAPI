import { Router } from 'express'
//import { Album } from '../models/album'
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

    let album: Album = {
        id: '222',
        name: req.body.name,
        year: 1969
    }

    // TODO insert album into DB

    res.status(200).json(album)
})

albumRouter.get('/:id', async(req, res) => {
    console.log(req.params.name)
    // TODO search album by name in DB

    if(req.params.id === '222') {
        let album: Album = {
            id: '222',
            name: 'Revolver',
            year: 1969            
        }
        res.status(200).json(album)
    } else {
        res.status(400).json({error: 'Author not found.'})
    }
})