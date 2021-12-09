import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadOneSong } from "../../store/songReducer";
import { loadAllSongs } from "../../store/songReducer";
import AudioPlayer from "../ReactAudioPlayer";
import '../SingleSong/singleSong.css'



const SinleSong = () => {
    const dispatch = useDispatch()
    const {songId} = useParams()
    // const songs = useSelector((state) => Object.values(state.songs))
    // const song = songs.find(song => song.songId === songs.id)
    const song = useSelector(state => state?.songs[songId])
    console.log(song, 'fefeefefef')

    useEffect(() => {
        dispatch(loadOneSong(songId))
    }, [dispatch, songId])

    return (
        <div className='songContainer'>
            <h2>{song?.title}</h2>
            <img className='img' src={song?.imgUrl} />
            <div>{song?.description}</div>
            <AudioPlayer songUrl={song?.songUrl}/>
        </div>
    )
}


export default SinleSong;