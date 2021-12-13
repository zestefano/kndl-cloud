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
                <break />
                <p className='text'>title</p>
                <input
                onChange={e => setTitle(e.target.value)}
                value={title}
                type='text'
                />
                <p className='text'>url.jpg</p>
                 <input
                onChange={e => setImgUrl(e.target.value)}
                value={imgUrl}
                type='text'
                />
                <p className='text'>description</p>
                 <textarea
                onChange={e => setDescription(e.target.value)}
                value={description}
                type='text'
                />
                <button className='submit'>submit</button>
            </form>
        </div>
    )
}

export default EditSong;