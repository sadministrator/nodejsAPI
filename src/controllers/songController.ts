import { Router } from 'express'
const Song = require('../models/song')

export const songRouter = Router()

songRouter.get('/', async(req, res) => {
    Song.find((err, songs) => {
        if (err) return res.status(400).send({err});
        res.status(200).json(songs);
    });
});

songRouter.get('/:id', async(req, res) => {
    Song.findById(req.params.id, (err, songs) => {
        if(err) return res.status(400).send({err})
        return res.status(200).send(songs)
    })
})

songRouter.post('/', async(req, res) => {
    Song.create(req.body, (err, post) => {
        if(err) return res.status(400).send({err})
        return res.status(201).json(post)
    })
})

songRouter.patch('/:id', async(req, res) => {
    Song.findById(req.params.id, (err, song) => {
        if(err) return res.status(400).send({err})
        for(let b in req.body) {
            song[b] = req.body[b]
        }
        song.save()
        return res.status(200).json(song)
    })
})

songRouter.delete('/:id', async(req, res) => {
    Song.findById(req.params.id, (err, song) => {
        if(err) return res.status(500).send({err})
        song.remove()
        return res.status(200).send('Song removed.')
    })
})