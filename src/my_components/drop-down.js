import React, {useEffect, useState} from 'react';

const audioOptions = [
    { label: 'Jazz', value: 'tq32Q5cKhkQ' },
    { label: 'Classical', value: 'fLoWzp8gRK4' },
    { label: 'Epic Gaming', value: 'nOmx4ePpuRM' },
    { label: 'Chillstep (dubstep)', value: 'SFompuJSbgQ' },
    { label: 'Instrumental Pop', value: 'D9yYrHR8XoU' },
    { label: 'Instrumental K-pop', value: 'zbjAHEwC2U8' },
];

const Dropdown = ({ onOptionSelect, selectedOption }) => {

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

export default Dropdown;
