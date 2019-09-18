import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ArtistSchema =  Schema({
    name: String,
    age: {
        type: Number,
        min: [6, 'What? They\'re a baby?'],
        max: [75, 'Listen to some new music.']
    }
});

module.exports = mongoose.model('Artist', ArtistSchema);
