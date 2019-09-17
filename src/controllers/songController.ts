import { Router } from 'express'
import { Song } from '../models/song'

export const authorRouter = Router()

authorRouter.delete('/:id', async(req, res) => {
    const a = req.params.id

    res.status(200).json({msg: 'song ' + a + ' deleted.'})
})

authorRouter.post('/', async(req, res) => {
    const a = req.body

    if(!a.name) {
        res.status(400).json({})
        return
    }

    let song: Song = {
        id: '111',
        name: req.body.name
    }

    // TODO insert song into DB

    res.status(200).json(song)
})

authorRouter.get('/', async(req, res) => {
    console.log(req.params.name)
    // TODO search for song by id on DB

    if(req.params.id === '111') {
        let song: Song = {
            id: "111",
            name: "Los Angeles"
        }
        res.status(200).json(song)
    } else {
        res.status(400).json({error: "Song not found."})
    }
})