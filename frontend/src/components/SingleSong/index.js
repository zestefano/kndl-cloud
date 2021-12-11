import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadOneSong } from "../../store/songReducer";
import { loadAllSongs } from "../../store/songReducer";
import AudioPlayer from "../ReactAudioPlayer";
// import AddComment from "../Comments/addComment";
import Comments from "../Comments";
import '../SingleSong/singleSong.css'



const SinleSong = () => {
    const dispatch = useDispatch()
    const {songId} = useParams()
    // const songs = useSelector((state) => Object.values(state.songs))
    // const song = songs.find(song => song.songId === songs.id)
    const song = useSelector(state => state?.songs[songId])
    // const comments = useSelector(state => state?.comments)
    // const comments = song?.Comments?.map(comment => comment?.comment)
    const userId = song?.User?.id

    
    useEffect(() => {
        dispatch(loadOneSong(songId))
    }, [dispatch])

    return (
        <div>
            <div className='songContainer'>
                <h2>{song?.title}</h2>
                <img className='img' src={song?.imgUrl} />
                <div>{song?.description}</div>
                <AudioPlayer songUrl={song?.songUrl}/>
            </div>
                {/* <ul>
                    {comments?.map((comment) => (
                        <div>{comment}</div>
                    ))}
                </ul> */}
                <Comments songId={songId} userId={userId} />
        </div>
    )
}


export default SinleSong;