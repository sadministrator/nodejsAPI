import { Song } from './song'
import { Artist } from './artist'

export interface Album {
    id: string,
    name: string,
    year: number,
    //artist: Artist
    //songs: Song[]
}