import { csrfFetch } from "./csrf";

const ADD_COMMENT = 'comments/addComment'
const GET_COMMENTS = 'comments/getComments'
const DELETE_COMMENTS = 'comments/deleteComment'

const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

const getComments = (comment) => {
    return {
        type: GET_COMMENTS,
        comment
    }
}

const deleteComment = (comment) => {
    return {
        type: DELETE_COMMENTS,
        comment
    }
}

export const addAComment = (comment) => async(dispatch) => {
    const response = await csrfFetch('/api/comments', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(comment)
    })

    if(response.ok) {
        const newComment = await response.json()
        dispatch(addComment(newComment))
    }
}

export const getAllComments = () => async(dispatch) => {
    const response = await csrfFetch('/api/comments')
    const comment = await response.json();
    dispatch(getComments(comment))
}


export const deleteAComment = (id) => async(dispatch) => {
    const response = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE'
    })
    if(response.ok) {
        dispatch(deleteComment(id))
    }
}




const initialState = {}

const commentReducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type) {
        case ADD_COMMENT:
            newState = {...state}
            newState[action.comment.id] = action.comment
            return newState
        case GET_COMMENTS:
            newState = {...state}
            action.comment.forEach(comment => newState[comment.id] = comment)
            return newState
        case DELETE_COMMENTS:
            newState = {...state}
            delete newState[action.comment]
            return newState
        default:
            return state
    }
}

export default commentReducer;