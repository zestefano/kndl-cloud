import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllSongs } from "../../store/songReducer";
import AudioPlayer from "../ReactAudioPlayer";
import '../../components/Songs/songs.css'
// import User from "../../../../backend/db/models/user";
import DeleteSong from "../DeleteSong";
import EditSongModal from "../EditSong";


const Songs = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const songs = useSelector((state) => Object.values(state.songs))

    // const [url, setUrl] = useState('')
    // console.log(url)

    // const songUrl = songs.find(song => song.songUrl === url)
 


    useEffect(() => {
        dispatch(loadAllSongs())
    }, [dispatch])

    return (
        <div className='songs'>
            {songs.map(({imgUrl, songUrl, title, User, id}) => (
                <div>
                    <img src={imgUrl} className='img' />
                    <AudioPlayer songUrl={songUrl} title={title} />
                    {sessionUser?.id === User?.id && (
                        <div>
                            <DeleteSong id={id}/>
                            <EditSongModal id={id}/>
                        </div>
                    )}
                </div>
                
                ))}
                {/* <AudioPlayer /> */}
        </div>
    )
}

export default Songs;