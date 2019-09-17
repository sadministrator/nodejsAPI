import { Song } from './song'

export interface Album {
    name: String,
    year: Number,
    songs: Song[]
}