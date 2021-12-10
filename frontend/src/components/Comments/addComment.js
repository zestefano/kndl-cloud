import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addAComment } from "../../store/commentReducer";
import '../Comments/addComment.css'

const AddComment = ({userId, songId, showModal}) => {
    const dispatch = useDispatch()
    

    const [comment, setComment] = useState('')
    // const comments = useSelector((state) => Object.values(state.comments))
    // console.log(comments)
    const onSubmit = async(e) => {
        e.preventDefault()
        

        const newComment = {
            comment,
            userId,
            songId
        }
        await dispatch(addAComment(newComment))
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