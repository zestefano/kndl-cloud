import { useDispatch } from "react-redux";
import { deleteASong } from "../../store/songReducer";


const DeleteSong = ({id}) => {
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(deleteASong(id))
    }

    return (
        <div>
            <button
            onClick={() => onSubmit(id)}
            id={id}
            >
                delete
            </button>
        </div>
    )
}

export default DeleteSong