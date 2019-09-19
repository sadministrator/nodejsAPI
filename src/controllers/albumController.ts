import { Router } from 'express'
const Album = require('../models/album')
const Artist = require('../models/artist')

export const albumRouter = Router()

albumRouter.get('/', async (req, res) => {
    Album.find((err, albums) => {
        if (err) return res.status(400).send({ err });
        res.status(200).json(albums);
    });
});

albumRouter.get('/:id', async (req, res) => {
    Album.findById(req.params.id, (err, albums) => {
        if (err) return res.status(400).send({ err })
        return res.status(200).send(albums)
    })
})

albumRouter.post('/', async (req, res) => {
    let album = new Album()
    if (req.body.name) album.name = req.body.name
    if (req.body.artistId) {
        album.artistId = req.body.artistId
        Artist.findById(album.artistId, (err, artist) => {
            if (err) return res.status(400).send({ err })
            if (!artist) return res.status(400).send({ err })
            else {
                album.artist = artist
                album.save((err, saved) => {
                    if (err) return res.status(400).send({ err })
                    if (saved) return res.status(200).send("Success.")
                })
            }
        })
    }
})

albumRouter.patch('/:id', async (req, res) => {
    Album.findById(req.params.id, (err, album) => {
        if (err) return res.status(400).send({ err })
        for (let b in req.body) {
            album[b] = req.body[b]
        }
        album.save()
        return res.status(200).json(album)
    })
})

albumRouter.delete('/:id', async (req, res) => {
    Album.findById(req.params.id, (err, album) => {
        if (err) return res.status(500).send({ err })
        album.remove()
        return res.status(200).send('Album removed.')
    })
})