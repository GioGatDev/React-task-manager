import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tareasform from './components/Tareasform';
import {tareas} from './tareas.json';
console.log(tareas);



class App extends Component {
  constructor (){
    super(); 
    this.state = {
       tareas
    }
     this.handleAddtareas = this.handleAddtareas.bind(this);
  }
  removetareas(index) {
    this.setState({
      tareas: this.state.tareas.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddtareas(tareas) {
    this.setState({
      tareas: [...this.state.tareas, tareas]
    })
  }
  render() {
    const tareas = this.state.tareas.map((tarea, i) =>{
      return (
        <div className="col-md-4">
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
                onClick={this.removetareas.bind(this, i)}>
                Delete
              </button>
            </div>
        </div>
        </div>
        )

    })

    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-dark">
      <a href="" className="text-white">
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
              <Tareasform onAddtareas={this.handleAddtareas}></Tareasform>
            </div>
            <div className="col-md-8">
              <div className="row">
                {tareas}
              </div>
            </div>

      </div>
      </div>
      </div>
    );
  }
}


export default App;
