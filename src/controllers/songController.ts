import { Router } from 'express'
const Song = require('../models/song')

export const songRouter = Router()

songRouter.get('/', async(req, res) => {
    Song.find((err, songs) => {
        if (err) return res.status(400).send({err});
        res.json(songs);
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
        return res.json(post)
    })
})