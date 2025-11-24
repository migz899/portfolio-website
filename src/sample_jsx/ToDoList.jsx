import { useState, useEffect } from "react";
import APIManager from "../managers/APIManager";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Load saved tasks from localStorage on first render
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) setTasks(JSON.parse(savedTasks)); // convert back to array
        setIsInitialLoad(false);
    }, []); // empty array → runs only once when component mounts

    // Save tasks to localStorage every time they change
    useEffect(() => {
        if (!isInitialLoad) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

    }, [tasks]); // runs whenever 'tasks' changes

    function addTask() {
        if (newTask.trim() === "") return;
        const newTaskObj = { text: newTask, completed: false, completedAt: "" };
        setTasks([...tasks, newTaskObj]);
        setNewTask("");
        //#region trim explanation
        // if (newTask.trim() === "") return;
        // trim() removes extra spaces before and after text.
        // Example: " hello " becomes "hello".
        // This line checks if the input is empty (like just spaces).
        // If it is, it stops (return) so no blank task gets added.
        //#endregion
        //#region setTasks and "..." spread operator
        // setTasks([...tasks, newTask]);
        // This creates a new array with all the old tasks plus the new one.
        // ...tasks → this is the spread operator.
        // It takes all items from tasks and “spreads” them into a new array.
        // #endregion
    }

    function removeTask(p_task) {
        setTasks(tasks.filter((_, i) => i !== p_task));
        //#region filter explanation
        // filter() → makes a new array that keeps only the items that match a condition.
        // It runs a function on each item in the list:
        // _ → placeholder for the task value(we don’t need it here).
        // i → the current index(position) of that task.
        // i !== p_task → means “keep everything except the one we want to remove.”
        //#endregion
    }

    async function handleCheckboxChange(p_index) {
        // Updates the task list and changes the complete key to true or false whenever someone ticks the checkbox

        const apiTime = await APIManager.getServerTime();
        const formattedTime = new Date(apiTime).toLocaleString("en-PH", {
            dateStyle: "medium",
            timeStyle: "short",
        });

        const updatedTasks = tasks.map((task, i) =>
            i === p_index ? {
                ...task,
                completed: !task.completed,
                completedAt: !task.completed ? formattedTime : null
            } : task
        );
        setTasks(updatedTasks);
    }

    return (
        <section style={{ padding: "30px" }}>
            <h2>My To-Do List</h2>
            <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            // e.target.value = is what is typed on the box
            />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((task, i) => (
                    <li key={i} style={{ color: task.completed ? "green" : "white", textDecoration: task.completed ? "line-through" : "none", }}>
                        {task.completedAt} <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(i)} /> {task.text} <button onClick={() => removeTask(i)}>❌</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default TodoList;