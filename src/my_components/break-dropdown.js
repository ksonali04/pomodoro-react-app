import React, {useEffect, useState} from 'react';

const audioOptions = [
    { label: 'Goofy', value: 'KwW18Jf-VpM' },
    { label: 'Pink', value: 'RqAVff7-VMg' }
];

const BreakDropdown = ({ onOptionSelect, selectedOption }) => {

    console.log("dropdown: " + selectedOption)

    const handleOptionSelect = (event) => {
        const selectedValue = event.target.value;
        onOptionSelect(selectedValue);
    };

    return (
        <div>
            <select className={'audio-selector'} value={selectedOption} onChange={handleOptionSelect}>
                {audioOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default BreakDropdown;
