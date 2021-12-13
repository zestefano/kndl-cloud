import { useDispatch } from "react-redux";
import { useState } from "react";
import { editAComment } from "../../store/commentReducer";
import '../Comments/editComment.css'

const EditComment = ({id, showModal, commentValue}) => {
    const dispatch = useDispatch()

    const [comment, setComment] = useState(commentValue)

    const onSubmit = async(e) => {
        e.preventDefault()

        const editComment = {
            id,
            comment
        }

        dispatch(editAComment(editComment, id))
        showModal(false)
    }

    return (
        <div>
            <form className='editCommentForm' onSubmit={onSubmit}>
                <h2 className='text'>edit comment</h2>
                <textarea
                onChange={e => setComment(e.target.value)}
                value={comment}
                type='textarea'
                // placeholder='edit comment'
                />
                <button className='submit'>submit</button>
            </form>
        </div>
    )
}

export default EditComment;