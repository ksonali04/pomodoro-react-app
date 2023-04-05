import './App.css';
import {useState, useEffect} from 'react';
import TaskOpen from "./my_components/task-open";
import BreakOpen from "./my_components/break-open";
import Pomodoro from "./my_components/Pomodoro";


function App() {

    //Shifting content
    const [isShiftedRight, setIsShiftedRight] = useState(false);
    const [isShiftedLeft, setIsShiftedLeft] = useState(false);

    function handleToggleVisibilityTask(isShiftedRight) {
        setIsShiftedRight(isShiftedRight);
    }

    function handleToggleVisibilityBreak(isShiftedLeft) {
        setIsShiftedLeft(isShiftedLeft);
    }


    return (
        <>
            <TaskOpen onToggleVisibility={handleToggleVisibilityTask}/>
            <BreakOpen onToggleVisibility={handleToggleVisibilityBreak}/>

            <div className={` break-content ${isShiftedLeft ? 'shiftedLeft' : ''}`}>
                <div className={` content ${isShiftedRight ? 'shiftedRight' : ''}`}>
                    <Pomodoro/>
                </div>
            </div>
        </>
    );
}

export default App;