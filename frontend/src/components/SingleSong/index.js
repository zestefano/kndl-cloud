import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadOneSong } from "../../store/songReducer";
import AudioPlayer from "../ReactAudioPlayer";
import Comments from "../Comments";
import '../SingleSong/singleSong.css'



const SinleSong = () => {
    const dispatch = useDispatch()
    const {songId} = useParams()
    const song = useSelector(state => state?.songs[songId])
    const userId = song?.User?.id

    
    useEffect(() => {
        dispatch(loadOneSong(songId))
    }, [dispatch])

    return (
        <div>
            <div className='songContainer'>
                <h2>{song?.User?.username}</h2>
                <h2>{song?.title}</h2>
                <img className='imgSingle' src={song?.imgUrl} />
                <div className='description'>
                    {song?.description}
                </div>
                    <AudioPlayer songUrl={song?.songUrl}/>
            </div>
            <h2 className='commentSection'>
                comments:
            </h2>
            <div className='commentSection'>
                <Comments songId={songId} userId={userId} />
            </div>
        </div>
    )
}


export default SinleSong;