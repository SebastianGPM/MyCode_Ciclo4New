import axios from "axios";
import React, {Component} from "react";
import Toolbar from "../layout/toolbar";
import {Link} from "react-router-dom"

class Usuario extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      posts:[]
    }
  }

  componentDidMount(){
    this.getPosts();
  }

  getPosts(){
    axios.get("/posts/usuario").then((resp) => {
      if(resp.data.success){
        this.setState({
          posts: resp.data.posts,
        });
        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    // alert(id)
    axios.delete(`/posts/delete/${id}`).then((res) => {
      alert("Eliminado " + res.data.nombre);

      /* acualizar lista */
      this.getPosts();
    });
  }


  filterContent(posts, searchTerm){
    const resultado = posts.filter((post) => 
      post.nombre.toLowerCase().includes(searchTerm) ||
      post.correo.toLowerCase().includes(searchTerm) ||
      post.estado.toLowerCase().includes(searchTerm) ||
      post.rol.toLowerCase().includes(searchTerm)
    );
    this.setState({posts: resultado});
  }

  handleBusqueda = (e) => {
    const searchTerm = e.currentTarget.value;

    axios.get("/posts/usuario").then((resp) => {
      if(resp.data.success){
        this.filterContent(resp.data.posts, searchTerm)
      }
    });
  }


  render() { 
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
            onChange={this.handleBusqueda}
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
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post, index) => (
              <tr>
                <th scope="row">{index}</th>
                <td>{post.nombre}</td>
                <td>{post.correo}</td>
                <td>{post.rol}</td>
                <td>{post.estado}</td>
                <td>
                  <a className="btn btn-warning" href={`/update/${post._id}`}>
                    <i className="fas fa-edit"></i>Editar
                  </a>
                  &nbsp;
                  <a 
                    className="btn btn-danger" 
                    href="#" 
                    onClick={() => this.onDelete(post._id)}>

                    <i className="fas fa-trast"></i>Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
          <div className="card-body text-center">
            <Link type="button" className="btn btn-dark border-dark"
              to="/CreateUsuario" >Crear nuevo usuario</Link>

          </div>
        </div>
      </React.Fragment>
    
     );
  }
}
 
export default Usuario;