import { Router } from 'express'
import { Artist } from '../models/artist'

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

    let artist: Artist = {
        id: '333',
        name: req.body.name
    }

    // TODO insert artist into DB

    res.status(200).json(artist)
})

artistRouter.get('/', async(req, res) => {
    console.log(req.params.name)
    // TODO search for artist by id on DB

    if(req.params.id === '111') {
        let artist: Artist = {
            id: "111",
            name: "Los Angeles"
        }
        res.status(200).json(artist)
    } else {
        res.status(400).json({error: 'Artist not found.'})
    }
})