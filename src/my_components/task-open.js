import React, { useState } from 'react';
import "../my_component_styles/task-open.css";

function SidePopup(props) {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
        props.onToggleVisibility(!isVisible); // Call the onToggleVisibility function passed in as a prop
    }

    return (
        <>
            <button className={"task_button" + (isVisible ? " shifted" : "")} onClick={toggleVisibility}>Tasks</button>
            <div className={`left_popup ${isVisible ? 'visible' : ''}`}>
                <p> Hello </p>
            </div>
        </>
    );
}

export default SidePopup;
