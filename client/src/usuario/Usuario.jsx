import React, {Component} from "react";
import Toolbar from "../layout/toolbar";
import {Link} from "react-router-dom"
import{useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const GET_USUARIOS = gql`
  {
    usuarios{
      _id
      nombre
      correo
      contrasena
      rol
      estado
    }
  }
`;

const Usuario = () => {

  const {loading, error, data} = useQuery(GET_USUARIOS)
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>
  console.log('datos:'+data);

  
    return ( 
      <React.Fragment>
      
      <Toolbar/>
      <div className="container mt-5">
        <div className="col-lg-3 mb-3">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar"
            name="searchTerm"
          ></input>

        </div>


        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Rol</th>
              <th scope="col">Estado</th>
              <th scope="col">Accionp</th>
            </tr>
          </thead>
          <tbody>
            {data.usuarios.map((usuario, index) => (
              <tr key={usuario._id}>
                <th scope="row">{index}</th>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.rol}</td>
                <td>{usuario.estado}</td>
                <td>
                  <a className="btn btn-warning" href={`/update/${usuario._id}`}>
                    <i className="fas fa-edit"></i>Editar
                  </a>
                  &nbsp;
                 {/*  <a 
                    className="btn btn-danger" 
                    href="#" 
                    onClick={() => this.onDelete(usuario._id)}>

                    <i className="fas fa-trast"></i>Eliminar
                  </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="d-flex justify-content-between">
          <div className="card-body text-center">
            <Link type="button" className="btn btn-dark border-dark"
              to="/CreateUsuario" >Crear nuevo usuario</Link>

          </div>
        </div> */}
      </React.Fragment>
    
     );
  }

 
export default Usuario;