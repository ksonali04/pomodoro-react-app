import React, { useState } from 'react';
import "../my_component_styles/break-open.css";

const BreakOpen =(props) => {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
        props.onToggleVisibility(!isVisible); // Call the onToggleVisibility function passed in as a prop
    }

    return (
        <>
            <button className={"break_button" + (isVisible ? " shifted" : "")} onClick={toggleVisibility}>Break</button>
            <div className={`right_popup ${isVisible ? 'visible' : ''}`}>
                <p> Hello </p>
            </div>
        </>
    );
}

export default BreakOpen;
