import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SongSchema = Schema({
    name: String,
});

module.exports = mongoose.model('Song', SongSchema);