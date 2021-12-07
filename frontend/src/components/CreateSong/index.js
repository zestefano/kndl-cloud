import { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateSong from "./createSong";


const UploadSong = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <button onClick={() => setShowModal(true)}>
                Upload Song
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateSong showModal={setShowModal}/>
                </Modal>
            )}
        </div>
    )
}

export default UploadSong;