import mongoose from 'mongoose'

const Schema = mongoose.Schema

const SongSchema = new Schema({
    id: String,
    name: String
})

module.exports = mongoose.model('Song', SongSchema)