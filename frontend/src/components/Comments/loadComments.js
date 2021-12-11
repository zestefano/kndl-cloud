import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteComment from "./deleteComment";
import EditComment from "./editComment";



import { getAllComments } from "../../store/commentReducer";
import EditCommentModal from "./editCommentModal";


const GetComments = ({userId, songId}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const allComments = useSelector((state) => Object.values(state.comments))
    const comments = allComments.filter(comment => comment.songId === +songId)
    

    useEffect(() => {
        dispatch(getAllComments())
    }, [dispatch])


    return (
        <div>
            {comments?.map(({comment, User, Song, id}) => (
            <div>
                {comment}
                {sessionUser?.id === User?.id && (
                        <div>
                            <DeleteComment id={id}/>
                            <div>
                            <EditCommentModal id={id} />
                            </div>
                        </div>
                    )}
            </div>
            
            ))}
        </div>
    )
}

export default GetComments;