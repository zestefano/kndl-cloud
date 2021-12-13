import { useSelector } from 'react-redux';


import GetComments from './loadComments';
// import AddComment from './addComment';
import AddCommentModal from './addCommentModal';
import EditCommentModal from './editCommentModal';
import './comments.css'


const Comments = ({userId, songId}) => {
    const sessionUser = useSelector((state) => state.session.user)

    return (
        <div>
            {sessionUser?.id === userId && (
                <div>
                    <AddCommentModal userId={userId} songId={songId}/>
                </div>

            )}
            <div className='getComments'>
                <GetComments userId={userId} songId={songId}/>
            </div>
        </div>
    )
}

export default Comments;