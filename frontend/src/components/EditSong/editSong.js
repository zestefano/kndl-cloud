import { useDispatch } from "react-redux";
import { useState } from "react";
import { editASong } from "../../store/songReducer";
import '../EditSong/editSong.css'

const EditSong = ({id, showModal, editImg, editSong, editTitle, editDescription}) => {
    const dispatch = useDispatch()



    const [title, setTitle] = useState(editTitle)
    const [imgUrl, setImgUrl] = useState(editImg)
    const [songUrl, setSongUrl] = useState(editSong)
    const [description, setDescription] = useState(editDescription)


    const onSubmit = async(e) => {
        e.preventDefault()

        const song = {
            id,
            title,
            imgUrl,
            songUrl,
            description
        }
        dispatch(editASong(song, id))
        showModal(false)
    }

    return (
        <div>
            <form className='editSong' onSubmit={onSubmit}> 
                <h2 className='text'>edit</h2>
                <input
                onChange={e => setTitle(e.target.value)}
                value={title}
                type='text'
                // placeholder='edit title'
                />
                 <input
                onChange={e => setImgUrl(e.target.value)}
                value={imgUrl}
                type='text'
                // placeholder='edit url.jpg'
                />
                 <input
                onChange={e => setSongUrl(e.target.value)}
                value={songUrl}
                type='text'
                // placeholder='edit url.mp3'
                />
                 <input
                onChange={e => setDescription(e.target.value)}
                value={description}
                type='text'
                // placeholder='edit description'
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default EditSong;