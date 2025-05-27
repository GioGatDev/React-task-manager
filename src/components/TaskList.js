import React from 'react';

function TaskList({ tasks, onRemoveTask }) {
  if (!tasks || tasks.length === 0) {
    return <h3 className="text-center">No hay tareas disponibles</h3>;
  }

  const getBadgeClass = (prioridad) => {
    switch (prioridad) {
      case 'baja':
        return 'bg-info';
      case 'media':
        return 'bg-warning';
      case 'alta':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div>
      <h2 className="mb-4">Lista de Tareas</h2>
      <div className="row">
        {tasks.map((task, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5>{task.tittle || task.title}</h5>
                <span className={`badge ${getBadgeClass(task.prioridad)}`}>
                  {task.prioridad}
                </span>
              </div>
              <div className="card-body">
                <p><strong>Responsable:</strong> {task.responsable}</p>
                <p>{task.descripcion}</p>
              </div>
              <div className="card-footer">
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => onRemoveTask(index)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;