import { csrfFetch } from "./csrf";


const LOAD_SONGS = 'songs/getSongs'


export const loadSongs = (songs) => {
    return {
        type: LOAD_SONGS,
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


const songReducer = (state = {}, action) => {
    let newState = {}
    switch(action.type) {
        case LOAD_SONGS:
            action.songs.forEach((song) => newState[song.id] = song)
            return newState
        default:
            return state;
    }
}

export default songReducer;