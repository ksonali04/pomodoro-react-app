import React, {useState} from 'react';
import "../my_component_styles/task-open.css";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';

function SidePopup(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [editedTask, setEditedTask] = useState(null);
    const [draggedTaskIndex, setDraggedTaskIndex] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);

    function toggleVisibility() {
        setIsVisible(!isVisible);
        props.onToggleVisibility(!isVisible); // Call the onToggleVisibility function passed in as a prop
    }
    //---
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (index) => {
        const confirmed = window.confirm("Are you sure you want to remove the task?");
        if (confirmed) {
            // Remove the task from the tasks array
            const updatedTasks = [...tasks];
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
        }
    };

    const deleteEditTask = (index) => {
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
        const updatedTasks = [task, ...tasks]; // Add the new task at the beginning
        setTasks(updatedTasks); // Assuming you are using useState to manage tasks state
        document.getElementById("task-name").value = '';
        document.getElementById("task-desc").value = '';
        document.getElementById("task-time").value = '';
    };

    const handleEditTask = (index) => {
        const task = tasks[index];
        setEditedTask(task);
        document.getElementById("task-name").value = task.name;
        document.getElementById("task-desc").value = task.desc;
        document.getElementById("task-time").value = task.time;
        deleteEditTask(index);
    };

    const handleUpdateTask = () => {
        const name = document.getElementById("task-name").value;
        const desc = document.getElementById("task-desc").value;
        const time = document.getElementById("task-time").value;
        const task = {
            name,
            desc,
            time,
            startTime: editedTask.startTime,
        };
        const updatedTasks = [task, ...tasks];
        setTasks(updatedTasks);
        setEditedTask(null);
        document.getElementById("task-name").value = '';
        document.getElementById("task-desc").value = '';
        document.getElementById("task-time").value = '';
    };

    const moveTaskUp = (index) => {
        const newTasks = [...tasks];
        if (index === 0) return; // Task is already at the top
        const task = newTasks.splice(index, 1)[0];
        newTasks.splice(index - 1, 0, task);
        setTasks(newTasks);
    };

    const moveTaskDown = (index) => {
        const newTasks = [...tasks];
        if (index === newTasks.length - 1) return; // Task is already at the bottom
        const task = newTasks.splice(index, 1)[0];
        newTasks.splice(index + 1, 0, task);
        setTasks(newTasks);
    };

    //---

    return (
        <>
            <button className={"task_button" + (isVisible ? " shifted" : "")} onClick={toggleVisibility}>task manager
            </button>
            {/*<button className="task_button task_history" onClick={toggleVisibility}>Task History</button>*/}
            <div className={`left_popup ${isVisible ? 'visible' : ''}`}>
                <div className="add_task">

                    <h2>Add task</h2>

                    <div className="form-row">
                        <label htmlFor="task-name">Task name:</label>
                        <input type="text" id="task-name" name="task-name" autocomplete="off" required/>
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
                        <div className="task-item"
                             key={index}
                             draggable="true" // Add a draggable attribute
                             onDragStart={() => setDraggedTaskIndex(index)}
                             onDragEnter={(e) => e.preventDefault()}
                             onDragOver={(e) => e.preventDefault()}
                             onDrop={() => {
                                 // Implement the drop event handler
                                 const newTasks = [...tasks];
                                 const task = newTasks.splice(draggedTaskIndex, 1)[0];
                                 newTasks.splice(index, 0, task);
                                 setTasks(newTasks);
                                 setDraggedTaskIndex(null); // Clear the index of the task being dragged
                             }}
                        >
                            <div>
                                <h2>{task.name}</h2>
                                <p>{task.desc}</p>
                                <p>Time to complete: {task.time} minutes</p>
                                {!task.startTime && <button onClick={() => startTask(index)}>Start task</button>}
                                {task.startTime && <button onClick={() => completeTask(index)}>Complete task</button>}
                                <button onClick={() => deleteTask(index)}>Delete task</button>
                                {/* Add the "Edit Task" button and its functionality */}
                                <button onClick={() => handleEditTask(index)}>Edit Task</button>
                            </div>
                            <div className="task-buttons">
                                {/*{!task.startTime && <button onClick={() => startTask(index)}>Start task</button>}*/}
                                {/*{task.startTime && <button onClick={() => completeTask(index)}>Complete task</button>}*/}
                                {/*<button onClick={() => deleteTask(index)}>Delete task</button>*/}
                                {index > 0 && <FaArrowAltCircleUp onClick={() => moveTaskUp(index)} />}
                                {index < tasks.length - 1 && <FaArrowAltCircleDown onClick={() => moveTaskDown(index)} />}
                            </div>

                        </div>
                    ))}


                </div>

                {/*<button onClick={() => console.log(tasks)}>Show tasks for the day</button>*/}

            </div>
        </>
    );
}
export default SidePopup;