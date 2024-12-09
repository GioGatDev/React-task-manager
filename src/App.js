import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tareasform from './components/Tareasform';
import data from './tareas.json';

class App extends Component {
  constructor(props) {  // Agregar props como parámetro
    super(props);
    this.state = {
      tareas: data.tareas || []
    };
    // Definir los métodos antes de hacer bind
    this.handleAddtareas = this.handleAddtareas.bind(this);
    this.removetareas = this.removetareas.bind(this);
  }

  // Definir los métodos
  handleAddtareas = (tarea) => {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    });
  }

  removetareas = (index) => {
    this.setState({
      tareas: this.state.tareas.filter((_, i) => i !== index)
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.tareas.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <Tareasform onAddtareas={this.handleAddtareas} />
            </div>
            <div className="col-md-8">
              <div className="row">
                {this.state.tareas.map((tarea, i) => (
                  <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                      <div className="card-header">
                        <h3>{tarea.tittle}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                          {tarea.prioridad}
                        </span>
                      </div>
                      <div className="card-body">
                        <p>{tarea.descripcion}</p>
                        <p><mark>{tarea.responsable}</mark></p>
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn btn-danger"
                          onClick={() => this.removetareas(i)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
