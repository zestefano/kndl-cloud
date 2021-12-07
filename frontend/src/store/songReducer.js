import { csrfFetch } from "./csrf";


const LOAD_SONGS = 'songs/getSongs'
const CREATE_SONG = 'songs/createSong'


export const loadSongs = (songs) => {
    return {
        type: LOAD_SONGS,
        songs
    }
}

export const createSong = (songs) => {
    return {
        type: CREATE_SONG,
        songs
    }
}

export const loadAllSongs = () => async(dispatch) => {
    const response = await csrfFetch('/api/songs')
    if(response.ok) {
        const songs = await response.json()
        dispatch(loadSongs(songs))
    }
}

export const createASong = (song) => async(dispatch) => {
    const response = await csrfFetch('/api/songs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(song)
    })
    if(response.ok) {
        const song = await response.json()
        dispatch(createSong(song))
    }
}


const songReducer = (state = {}, action) => {
    let newState = {}
    switch(action.type) {
        case LOAD_SONGS:
            action.songs.forEach((song) => newState[song.id] = song)
            return newState
        case CREATE_SONG:
            newState = {
                ...state,
                [action.songs.newSong.id]: action.songs.newSong
            }
            return newState
        default:
            return state;
    }
}

export default songReducer;