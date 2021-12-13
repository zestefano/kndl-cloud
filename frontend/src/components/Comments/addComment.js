import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addAComment } from "../../store/commentReducer";
import '../Comments/addComment.css'

const AddComment = ({songId, showModal}) => {
    
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session.user.id)


    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState([])
  
    const onSubmit = async(e) => {
        setErrors([])
        e.preventDefault()
        

        const newComment = {
            comment,
            userId,
            songId
            
        }
        let errs;
        await dispatch(addAComment(newComment)).catch(async(res) => {
            const commentData = await res.json()
            if(commentData && commentData.errors) setErrors(commentData.errors)
            errs = commentData.errors
        })
        if(!errs) {
            setComment('')
            showModal(false)
        }
        
        
    }


    return (
        <div>
            <form className='addComment' onSubmit={onSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li className='error' key={idx}>{error}</li>
                    ))}
                </ul>
                <h2 className='textComment'>add comment</h2>
                <textarea
                type='text'
                placeholder='add comment'
                onChange={e => setComment(e.target.value)}
                value={comment}
                />
                <button
                className='submit'
                disabled={comment ? false : true}
                >submit</button>
            </form>
        </div>
    )
}

export default AddComment;