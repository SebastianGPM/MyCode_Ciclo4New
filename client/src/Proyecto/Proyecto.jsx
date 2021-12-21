// import axios from "axios";
import React, { Component } from "react";
import Toolbar from "../layout/toolbar";
import { Link } from "react-router-dom"
import{useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const GET_PROYECTOS = gql`
  {
    proyectos{
      _id
      nombreProyecto
      descripcionProyecto
      objetivoGeneral
      objetivosEspecificos
      estado
      fase
      presupuesto
      avance
    }
  }


`;

const Proyecto = () => {

  const {loading, error, data} = useQuery(GET_PROYECTOS)
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>
  console.log('datos:'+data);

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
                  {data.proyectos.map((proyecto, index) => (
                    <tr key={proyecto._id}>
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

export default Proyecto;