import axios from "axios";
import React, { Component } from "react";
import Toolbar from "../layout/toolbar";
import { Link } from "react-router-dom"

class Proyecto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      proyectos: []
    }
  }

  componentDidMount() {
    this.getProyectos();
  }

  getProyectos() {
    axios.get("/Rproyecto/proyecto").then((resp) => {
      if (resp.data.success) {
        this.setState({
          proyectos: resp.data.proyectos,
        });
        console.log(this.state.proyectos);
      }
    });
  }

  onDelete = (id) => {
    // alert(id)
    axios.delete(`/Rproyecto/delete/${id}`).then((res) => {
      alert("Eliminado " + res.data.descrip);

      /* acualizar lista */
      this.getProyectos();
    });
  }


  filterContent(proyectos, searchTerm) {
    const resultado = proyectos.filter((proyecto) =>
      proyecto.descrip.toLowerCase().includes(searchTerm) ||
      proyecto.valUnit.toLowerCase().includes(searchTerm) ||
      proyecto.estado.toLowerCase().includes(searchTerm)
    );
    this.setState({ proyectos: resultado });
  }

  handleBusqueda = (e) => {
    const searchTerm = e.currentTarget.value;

    axios.get("/Rproyecto/proyecto").then((resp) => {
      if (resp.data.success) {
        this.filterContent(resp.data.proyectos, searchTerm)
      }
    });
  }


  render() {
    return (
      <React.Fragment>

        <Toolbar />

        <div className="card">
          <div className="card-body">
            <h1>Lista de Proyectos</h1>
            <div className="container mt-5">



              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">nombreProyecto</th>
                    <th scope="col">descripcionProyecto</th>
                    <th scope="col">objetivoGeneral</th>
                    <th scope="col">objetivosEspecificos</th>
                    <th scope="col">Estado</th>
                    <th scope="col">fase</th>
                    <th scope="col">presupuesto</th>
                    <th scope="col">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.proyectos.map((proyecto, index) => (
                    <tr>
                      <th scope="row">{index}</th>
                      <td>{proyecto.nombreProyecto}</td>
                      <td>{proyecto.descripcionProyecto}</td>
                      <td>{proyecto.objetivoGeneral}</td>
                      <td>{proyecto.objetivosEspecificos}</td>
                      <td>{proyecto.estado}</td>
                      <td>{proyecto.fase}</td>
                      <td>{proyecto.presupuesto}</td>
                      <td>
                        <a className="btn btn-warning" href={`/updateProy/${proyecto._id}`}>
                          <i className="fas fa-edit"></i>Editar
                        </a>
                        &nbsp;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>
        <div className="d-flex justify-content-between">
          <div className="card-body text-center">
            <Link type="button" className="btn btn-dark border-dark"
              to="/addProyecto" >Crear nuevo proyecto</Link>

          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default Proyecto;