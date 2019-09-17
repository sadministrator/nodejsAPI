import mongoose from 'mongoose'
const SongSchema = require('./song').schema
const ArtistSchema = require('./artist').schema

const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    id: String,
    name: String,
    year: Number,
    artist: ArtistSchema,
    song: SongSchema
})

module.exports = mongoose.model('Album', AlbumSchema)