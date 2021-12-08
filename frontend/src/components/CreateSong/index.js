import { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateSong from "./createSong";
import '../CreateSong/createSong.css'

const UploadSong = () => {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button onClick={() => setModal(true)}>
                Upload Song
            </button>
            {modal && (
                <div>
                    <Modal onClose={() => setModal(false)}>
                        <CreateSong showModal={setModal}/>
                    </Modal>
                </div>
            )}
        </div>
    )
}

export default UploadSong;