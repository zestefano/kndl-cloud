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
    const [errors, setErrors] = useState([])

    const onSubmit = async(e) => {
        setErrors([])
        e.preventDefault()
        const song = {
            title, 
            imgUrl,
            songUrl,
            userId,
            description
        }
        let errs;
        await dispatch(createASong(song)).catch(async(res) => {
            const songData = await res.json()
            if(songData && songData.errors) setErrors(songData.errors)
            errs = songData.errors
        })
        if(!errs) {
            showModal(false)
        }
    }

    return (
        <div>
            <form className='uploadSong' onSubmit={onSubmit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx} className='error'>{error}</li>
                    ))}
                </ul>
                <h2 className='textUp'>upload</h2>
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