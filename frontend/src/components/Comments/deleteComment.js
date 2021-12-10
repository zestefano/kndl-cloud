import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { deleteASong } from "../../store/songReducer";
import { deleteAComment } from "../../store/commentReducer";
// import '../DeleteSong/deleteSong.css'

// import { getAllComments } from "../../store/commentReducer";


const DeleteComment = ({id}) => {
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(deleteAComment(id))
    }
    return (
        <div className='delete'>
            <button
            onClick={() => onSubmit(id)}
            id={id}
            >
                delete
            </button>
        </div>
    )
}

export default DeleteComment