import React from 'react';

const BreakDropdown = ({ onInputChange, selectedOption }) => {

    console.log("dropdown: " + selectedOption)

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const videoId = extractVideoIdFromUrl(inputValue);
        onInputChange(videoId);
    };

    const extractVideoIdFromUrl = (url) => {
        // Use a regular expression to match the video ID from the YouTube URL
        const regex = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        }
        return url;
    };

    return (
        <div>
            <input
                className={'audio-selector'}
                type="text"
                value={selectedOption}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default BreakDropdown;
