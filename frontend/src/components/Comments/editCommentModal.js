import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditComment from "./editComment";

const EditCommentModal = ({id}) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button onClick={() => setModal(true)}>
                edit
            </button>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditComment id={id} showModal={setModal} />
                </Modal>
            )}
        </div>
    )
}


export default EditCommentModal;