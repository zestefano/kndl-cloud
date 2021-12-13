import { useSelector } from 'react-redux';


import GetComments from './loadComments';
import AddCommentModal from './addCommentModal';
import './comments.css'


const Comments = ({userId, songId}) => {
    const sessionUser = useSelector((state) => state.session.user)

    return (
        <div>
            {sessionUser && (
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