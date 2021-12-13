import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteComment from "./deleteComment";
import EditComment from "./editComment";
import './comments.css'


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
        <div className='commentsContainer'>
            
            {comments?.map(({comment, User, Song, id}) => (
            <div className='commentUser'>
                <div></div>
                <break />
                <break />
                <div className='commentUser'>
                    <b>{User.username}:</b>
                </div>
                <break />
                <div>
                    {comment}
                </div>
                {sessionUser?.id === User?.id && (
                        <div className='editDelete'>
                            <DeleteComment id={id}/>
                            <div>
                            <EditCommentModal id={id} commentValue={comment} />
                            </div>
                        </div>
                    )}
            </div>
            
            ))}
        </div>
    )
}

export default GetComments;