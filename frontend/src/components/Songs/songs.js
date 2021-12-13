import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllSongs } from "../../store/songReducer";
import { Link } from "react-router-dom";
import AudioPlayer from "../ReactAudioPlayer";
import '../../components/Songs/songs.css'
import DeleteSong from "../DeleteSong";
import EditSongModal from "../EditSong";


const Songs = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const songs = useSelector((state) => Object.values(state.songs))

    // const [url, setUrl] = useState('')


    // const songUrl = songs.find(song => song.songUrl === url)
 


    useEffect(() => {
        dispatch(loadAllSongs())
    }, [dispatch])

    return (
        <div className='songsContainer'>
            {songs.map(({imgUrl, songUrl, title, User, id, description}) => (
                <div className='song'>
                    <div className='pad'>
                    {sessionUser?.id === User?.id && (
                        <div className='button'>
                            <EditSongModal id={id} editImg={imgUrl} editTitle={title} editSong={songUrl} editDescription={description}/>
                            <DeleteSong id={id}/>
                        </div>
                    )}
                    {/* <p className='songLink'>{User.username}</p> */}
                    <Link className='songLink' id='link' to={`/${id}`}>{User.username}  -  {title}</Link>
                        <img src={imgUrl} className='img' />
                    <AudioPlayer songUrl={songUrl} title={title} />
                    </div>
                </div>
                
                ))}
                {/* <AudioPlayer /> */}
        </div>
    )
}

export default Songs;