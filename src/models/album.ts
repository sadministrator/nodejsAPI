import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ArtistSchema = require('./artist').schema;
const SongSchema = require('./song').schema;

const AlbumSchema = Schema({
    name: String,
    year: Number,
    artist: ArtistSchema,
    song: SongSchema,
});

module.exports = mongoose.model('Album', AlbumSchema);