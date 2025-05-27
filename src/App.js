import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/Tareasform';
import TaskList from './components/TaskList';
import logo from './logo.svg';
import tasksData from './tareas.json';

function App() {
  const [tasks, setTasks] = useState(tasksData.tareas || []);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="/" className="text-white">
          Tareas
          <span className="badge badge-pill badge-light ml-2">{tasks.length}</span>
        </a>
      </nav>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <TaskForm onAddTask={handleAddTask} />
          </div>
          <div className="col-md-8">
            <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
