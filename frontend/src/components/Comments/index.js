import { useSelector } from 'react-redux';


import GetComments from './loadComments';
// import AddComment from './addComment';
import AddCommentModal from './addCommentModal';



const Comments = ({userId, songId}) => {
    const sessionUser = useSelector((state) => state.session.user)

    return (
        <div>
            <div>
            <AddCommentModal userId={userId} songId={songId}/>
            </div>
            <GetComments userId={userId} songId={songId}/>
        </div>
    )
}

export default Comments;