import { csrfFetch } from "./csrf";


const LOAD_SONGS = 'songs/getSongs'
const CREATE_SONG = 'songs/createSong'
const DELETE_SONG = 'songs/deleteSong'
const EDIT_SONG = 'songs/editSong'
const LOAD_SINGLE_SONG = 'songs/loadSingleSong'


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

const deleteSong = (song) => {
    return {
        type: DELETE_SONG,
        song
    }
}

const editSong = (song) => {
    return {
        type: EDIT_SONG,
        song
    }
}

const loadSingleSong = (song) => {
    return {
        type: LOAD_SINGLE_SONG,
        song
    }
}

export const loadAllSongs = () => async(dispatch) => {
    const response = await csrfFetch('/api/songs')
    if(response.ok) {
        const songs = await response.json()
        dispatch(loadSongs(songs))
    }
}

export const loadOneSong = (id) => async(dispatch) =>{
    const response = await csrfFetch(`/api/songs/${id}`)
    if(response.ok) {
        const song = await response.json()
        dispatch(loadSingleSong(song))
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


export const deleteASong = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`, {
        method: 'DELETE'
    })
    if(response.ok) {
        dispatch(deleteSong(id))
    }
}

export const editASong = (song, id) => async(dispatch) => {
    const response = await csrfFetch(`/api/songs/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(song)
    })
    if(response.ok) {
        const song = await response.json()
        dispatch(editSong(song))
    }
}

const initialState = {}

const songReducer = (state = initialState, action) => {
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
        case DELETE_SONG:
            newState = {...state}
            delete newState[action.song]
            return newState
        case EDIT_SONG:
            newState = {...state}
            newState[action.song.song.id] = action.song.song
            return newState
        case LOAD_SINGLE_SONG:
             newState = {...state}
             newState[action.song.id] = action.song
             return newState
        default:
            return state;
    }
}

//comment


export default songReducer;