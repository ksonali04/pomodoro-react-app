import React, {useEffect, useState} from 'react';
import YouTube, {YouTubePlayer} from 'react-youtube';

const AudioButton = ({selectedOption, timerOver}) => {
    const [player, setPlayer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    console.log("audioButton: " + selectedOption);

    const handlePlayButtonClick = () => {
        if (player && selectedOption) {
            if (isPlaying ) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (player && selectedOption) {
            if (timerOver) {
                player.pauseVideo();
            }
            setIsPlaying(!isPlaying);
        }
    }, [timerOver]);

    // const handlePlayButtonClick = () => {
    //     if (player && selectedOption) {
    //         if (isPlaying && isAudioPlaying) {
    //             player.pauseVideo();
    //         } else if (!isPlaying && !isAudioPlaying) {
    //             player.playVideo();
    //         }
    //         setIsPlaying(!isPlaying);
    //     }
    // };

    const handlePlayerReady = (event) => {
        setPlayer(event.target);
    };

    const handlePlayerStateChange = (event) => {
        setIsPlaying(event.target.getPlayerState() === 1);
    };

    return (
        <div>
            <button className="display__mute"
                    id="muteButton"
                    title="mute button"
                    onClick={handlePlayButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                </svg>

            </button>

            {selectedOption && (
                <YouTube
                    videoId={selectedOption}
                    opts={{ playerVars: { modestbranding: 1, controls: 0, disablekb: 1, enablejsapi: 1, origin: window.location.origin }, width: '0', height: '0' }}
                    onReady={handlePlayerReady}
                    onStateChange={handlePlayerStateChange}
                />
            )}
        </div>
    );
};

export default AudioButton;
