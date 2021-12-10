import { useState } from "react";
import { Modal } from "../../context/Modal";
import AddComment from "./addComment";
import '../EditSong/editSong.css'


const AddCommentModal = ({userId, songId}) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <div className='edit'>
            <button onClick={() => setModal(true)}>
                add a comment
            </button>
            </div>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <AddComment userId={userId} songId={songId} showModal={setModal} />
                </Modal>
            )}
        </div>
    )
}

export default AddCommentModal;