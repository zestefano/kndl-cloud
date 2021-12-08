import { useDispatch } from "react-redux";
import { deleteASong } from "../../store/songReducer";


const DeleteSong = ({id}) => {
    const dispatch = useDispatch()

    const onSubmit = (id) => {
        dispatch(deleteASong(id))
    }

    return (
        <div>
            <button
            onClick={() => onSubmit(id)}
            id={id}
            >
                Delete
            </button>
        </div>
    )
}

export default DeleteSong