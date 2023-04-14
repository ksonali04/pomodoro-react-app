import React, {useState} from 'react';
import "../my_component_styles/task-open.css";

function SidePopup(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [tasks, setTasks] = useState([]);

    function toggleVisibility() {
        setIsVisible(!isVisible);
        props.onToggleVisibility(!isVisible); // Call the onToggleVisibility function passed in as a prop
    }

    //---

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const completeTask = (index) => {
        const newTasks = [...tasks];
        const task = newTasks[index];
        const endTime = new Date();
        const timeTaken = Math.floor((endTime - task.startTime) / 1000 / 60);
        alert(`You took ${timeTaken} minutes to complete "${task.name}"`);
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const startTask = (index) => {
        const newTasks = [...tasks];
        const task = newTasks[index];
        task.startTime = new Date();
        setTasks(newTasks);
    };

    const handleSaveTask = () => {
        const name = document.getElementById("task-name").value;
        const desc = document.getElementById("task-desc").value;
        const time = document.getElementById("task-time").value;
        const task = {
            name,
            desc,
            time,
            startTime: null,
        };
        addTask(task);
    };

    //---

    return (
        <>
            <button className={"task_button" + (isVisible ? " shifted" : "")} onClick={toggleVisibility}>Add Tasks
            </button>
            <div className={`left_popup ${isVisible ? 'visible' : ''}`}>


                <div className="add_task">

                    <h2>Add task</h2>

                    <div className="form-row">
                        <label htmlFor="task-name">Task name:</label>
                        <input type="text" id="task-name" name="task-name" required/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="task-desc">Task
                            description:</label>
                        <textarea id="task-desc" name="task-desc" rows="4" required></textarea>
                    </div>

                    <div className="form-row">
                        <label htmlFor="task-time">Estimated time
                            (minutes):</label>
                        <input type="number" id="task-time" name="task-time" required/>
                    </div>

                    <button onClick={handleSaveTask}>Save task</button>

                </div>

                <div className="task-list">

                    {tasks.map((task, index) => (
                        <div className="task-item" key={index}>
                            <h2>{task.name}</h2>
                            <p>{task.desc}</p>
                            <p>Time to complete: {task.time} minutes</p>
                            {!task.startTime && <button onClick={() => startTask(index)}>Start task</button>}
                            {task.startTime && <button onClick={() => completeTask(index)}>Complete task</button>}
                            <button onClick={() => deleteTask(index)}>Delete task</button>
                        </div>
                    ))}
                </div>

                {/*<button onClick={() => console.log(tasks)}>Show tasks for the day</button>*/}

            </div>
        </>
    );
}

export default SidePopup;
