import ReactAudioPlayer from 'react-audio-player';
import './audioPlayer.css'


const AudioPlayer = ({songUrl, title}) => {
    return (
        <div className='audioPlayer'>
            <ReactAudioPlayer
            src={songUrl}
            autoPlay={false}
            controls
            />
        </div>
    )
}

export default AudioPlayer;