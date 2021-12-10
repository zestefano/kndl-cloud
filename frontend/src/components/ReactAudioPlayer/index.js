import ReactAudioPlayer from 'react-audio-player';


const AudioPlayer = ({songUrl, title}) => {
    return (
        <div>
            <ReactAudioPlayer
            src={songUrl}
            autoPlay={false}
            controls
            />
        </div>
    )
}

export default AudioPlayer;