import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditComment from "./editComment";

const EditCommentModal = ({id, commentValue}) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button onClick={() => setModal(true)}>
                <i class="fas fa-edit"></i>
            </button>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditComment id={id} showModal={setModal} commentValue={commentValue} />
                </Modal>
            )}
        </div>
    )
}


export default EditCommentModal;