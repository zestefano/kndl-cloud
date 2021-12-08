import { useState } from "react";
import { Modal } from "../../context/Modal";
import EditSong from "./editSong";


const EditSongModal = ({id}) => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button onClick={() => setModal(true)}>
                edit song
            </button>
            {modal && (
                <Modal onClose={() => setModal(false)}>
                    <EditSong id={id} showModal={setModal} />
                </Modal>
            )}
        </div>
    )
}

export default EditSongModal;