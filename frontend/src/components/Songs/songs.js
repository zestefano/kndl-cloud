import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllSongs } from "../../store/songReducer";
import AudioPlayer from "../ReactAudioPlayer";
import '../../components/Songs/songs.css'
// import User from "../../../../backend/db/models/user";
import DeleteSong from "../DeleteSong";


const Songs = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const songs = useSelector((state) => Object.values(state.songs))


    useEffect(() => {
        dispatch(loadAllSongs())
    }, [dispatch])

    return (
        <div className='songs'>
            {songs.map(({id, songUrl, imgUrl, User, title}) => (
                <div>
                    <img src={imgUrl} className='img' />
                    <AudioPlayer songUrl={songUrl} title={title} />
                    {sessionUser.id === User.id && (
                        <DeleteSong id={id}/>
                    )}
                </div>
                
                ))}
        </div>
    )
}

export default Songs;