import { csrfFetch } from "./csrf";

const GET_USERS_SONGS = 'profile/getUsersSongs'

const getSongs = (songs) => {
    return {
        type: GET_USERS_SONGS,
        songs
    }
}

export const getAllUsersSongs = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/profile/${id}`)
    if(response.ok) {
        const songs = response.json()
        dispatch(getSongs(songs))
    }
}

const initialState = {}

const profileReducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type) {
        case GET_USERS_SONGS:
            action.songs.forEach(song => newState[song.id] = song)
            return newState
        default:
            return state
    }
}

export default profileReducer;