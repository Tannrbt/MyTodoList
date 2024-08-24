import React, {useState} from "react";

function Todo() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 font-weight-bold">MY TO DO LIST REACT</h1>
            <div className="input-group mb-3">
                <input className="form-control" placeholder="veuillez ajouter une tache" type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleAddTask}>Ajouter une tache</button>
                </div>
            </div>
            <ul className="list-group">
                {tasks.map((task, index) => (
                    <li key={index} className={"list-group-item d-flex justify-content-between align-items-center"}>
                    <span>
                        {task.text}
                    </span>
                    <div>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDeleteTask(index)}>Supprimer</button>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo