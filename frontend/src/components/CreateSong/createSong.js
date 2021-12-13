import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";


import { createASong } from "../../store/songReducer";
import '../CreateSong/createSong.css'

const CreateSong = ({showModal}) => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state.session.user.id)

    const [title, setTitle] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [songUrl, setSongUrl] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault()
        const song = {
            title, 
            imgUrl,
            songUrl,
            userId,
            description
        }
        await dispatch(createASong(song))
        showModal(false)
    }

    return (
        <div>
            <form className='uploadSong' onSubmit={onSubmit}>
                <h2 className='text'>upload</h2>
                <input
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    placeholder='title'
                />
                <input
                    onChange={e => setImgUrl(e.target.value)}
                    value={imgUrl}
                    placeholder='url.jpg'
                 />
                 <input 
                    onChange={e => setSongUrl(e.target.value)}
                    value={songUrl}
                    placeholder='url.mp3'
                 />
                 <textarea
                 onChange={e => setDescription(e.target.value)}
                 value={description}
                 placeholder='description'
                 />
                 <button type='submit' className='submit'>
                     submit
                 </button>
            </form>
        </div>
    )
}

export default CreateSong;