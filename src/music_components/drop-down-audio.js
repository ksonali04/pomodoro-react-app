import React, { useState } from 'react';
import YouTube from 'react-youtube';

const audioOptions = [
    { label: 'Jazz', value: 'tq32Q5cKhkQ' },
    {label: 'Game Music', value: 'nOmx4ePpuRM'}
];

const DropdownAudio = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [player, setPlayer] = useState(null);

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    const handlePlayButtonClick = () => {
        if (player && selectedOption) {
            player.playVideo();
        }
    };

    const handlePlayerReady = (event) => {
        setPlayer(event.target);
    };

    return (
        <div>
            <select value={selectedOption} onChange={handleOptionSelect}>
                <option value="">Select a song</option>
                {audioOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <button onClick={handlePlayButtonClick} disabled={!selectedOption}>
                Play
            </button>
            {selectedOption && (
                <YouTube
                    videoId={selectedOption}
                    opts={{ playerVars: { modestbranding: 1, controls: 0, disablekb: 1, enablejsapi: 1, origin: window.location.origin }, width: '0', height: '0' }}
                    onReady={handlePlayerReady}
                />
            )}
        </div>
    );
};

export default DropdownAudio;
