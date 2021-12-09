import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditSong from "./editSong";

import '../EditSong/editSong.css'


const EditSongModal = ({id}) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <div className='edit'>
            <button onClick={() => setModal(true)}>
                edit
            </button>
            </div>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditSong id={id} showModal={setModal} />
                </Modal>
            )}
        </div>
    )
}

export default EditSongModal;