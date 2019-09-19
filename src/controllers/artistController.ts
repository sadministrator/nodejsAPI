import { Router } from 'express'
const Artist = require('../models/artist')

export const artistRouter = Router()

artistRouter.get('/', async(req, res) => {
    Artist.find((err, artists) => {
        if (err) return res.status(400).send({err});
        res.status(200).json(artists);
    });
});

artistRouter.get('/:id', async(req, res) => {
    Artist.findById(req.params.id, (err, artists) => {
        if(err) return res.status(400).send({err})
        return res.status(200).send(artists)
    })
})

artistRouter.post('/', async(req, res) => {
    Artist.create(req.body, (err, post) => {
        if(err) return res.status(400).send({err})
        return res.status(201).json(post)
    })
})

artistRouter.patch('/:id', async(req, res) => {
    Artist.findById(req.params.id, (err, artist) => {
        if(err) return res.status(400).send({err})
        for(let b in req.body) {
            artist[b] = req.body[b]
        }
        artist.save()
        return res.status(200).json(artist)
    })
})

artistRouter.delete('/:id', async(req, res) => {
    Artist.findById(req.params.id, (err, artist) => {
        if(err) return res.status(500).send({err})
        artist.remove()
        return res.status(200).send('Artist removed.')
    })
})