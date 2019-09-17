import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ArtistSchema = new Schema({
    id: String,
    name: String
})

module.exports = mongoose.model('Artist', ArtistSchema)