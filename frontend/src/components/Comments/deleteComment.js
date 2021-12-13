import { useDispatch } from "react-redux";
import { deleteAComment } from "../../store/commentReducer";



const DeleteComment = ({id}) => {
   
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(deleteAComment(id))
    }
    return (
        <div>
            <button
            onClick={() => onSubmit(id)}
            id={id}
            >
                <i class="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default DeleteComment