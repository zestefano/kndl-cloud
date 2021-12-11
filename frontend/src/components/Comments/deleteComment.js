import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
// import { deleteASong } from "../../store/songReducer";
import { deleteAComment } from "../../store/commentReducer";
// import { useParams } from "react-router";
// import '../DeleteSong/deleteSong.css'

// import { getAllComments } from "../../store/commentReducer";


const DeleteComment = ({id}) => {
   
    const dispatch = useDispatch()
    // const history = useHistory()

    const onSubmit = () => {
        dispatch(deleteAComment(id))
        // history.push(`/${songId}`)
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