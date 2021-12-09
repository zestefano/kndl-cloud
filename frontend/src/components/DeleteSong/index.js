import { useDispatch } from "react-redux";
import { deleteASong } from "../../store/songReducer";
import '../DeleteSong/deleteSong.css'


const DeleteSong = ({id}) => {
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(deleteASong(id))
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

export default DeleteSong