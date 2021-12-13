import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditSong from "./editSong";

import '../EditSong/editSong.css'


const EditSongModal = ({id, editImg, editSong, editTitle, editDescription}) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <div className='edit'>
            <button onClick={() => setModal(true)}>
                <i class="fas fa-edit"></i>
            </button>
            </div>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditSong id={id} showModal={setModal} editImg={editImg} editTitle={editTitle} editSong={editSong} editDescription={editDescription}/>
                </Modal>
            )}
        </div>
    )
}

export default EditSongModal;