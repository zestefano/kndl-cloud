import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";
import { restoreUser } from "../../store/session";


import { addAComment } from "../../store/commentReducer";
import '../Comments/addComment.css'



const AddComment = ({userId, songId, showModal}) => {
    
    const dispatch = useDispatch()
    // const history = useHistory()
    // const sessionUser = useSelector((state) => state.session.user)

    // const user = useSelector(state => state.session.user)


    const [comment, setComment] = useState('')
    // const comments = useSelector((state) => Object.values(state.comments))
  
    const onSubmit = async(e) => {
        e.preventDefault()
        

        const newComment = {
            comment,
            userId,
            songId
            
        }
        // dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
        await dispatch(addAComment(newComment))
        // .then(() => history.push(`/${songId}`))
        setComment('')
        showModal(false)
        
        
    }


    return (
        <div>
            <form className='addComment' onSubmit={onSubmit}>
                <textarea
                type='text'
                placeholder='add comment'
                onChange={e => setComment(e.target.value)}
                value={comment}
                />
                <button
                disabled={comment ? false : true}
                >submit</button>
            </form>
        </div>
    )
}

export default AddComment;