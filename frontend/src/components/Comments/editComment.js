import { useDispatch } from "react-redux";
import { useState } from "react";
import { editAComment } from "../../store/commentReducer";

const EditComment = ({id, showModal}) => {
    const dispatch = useDispatch()

    const [comment, setComment] = useState('')

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
            <form onSubmit={onSubmit}>
                <input
                onChange={e => setComment(e.target.value)}
                value={comment}
                type='text'
                placeholder='edit comment'
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default EditComment;