import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import{useMutation} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'


const CREATE_USUARIO = gql`
  
    mutation CreateUsuario(  

        $nombre: String,
        $correo: String,
        $contrasena: String,
        $rol: String,
        $estado: String
    ){
        createUsuario(
            nombre: $nombre,
            correo: $correo,
            contrasena: $contrasena,
            rol: $rol,
            estado: $estado
        ){
            _id
        }
    }
`;

const RegisterPage = () => {

    const [nombre, setnombre] = useState('')
    const [correo, setcorreo] = useState('')
    const [contrasena, setcontrasena] = useState('')
    const [rol, setrol] = useState('')
    const [estado, setestado] = useState('false')

    const [createUsuario] = useMutation(CREATE_USUARIO)

    return (
        
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-items-center d-flex">
                        <br /><br />
                        <div className="container">

                        <h1>Registro</h1>
                        <br />

                        <form onSubmit={e => {
                            // e.preventDefault();
                            console.log(nombre);
                            createUsuario({variables:{nombre,correo,contrasena,rol,estado}})
                        }}>



                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="" placeholder="Pedro José López Hurtado" 
                                onChange = {e => setnombre(e.target.value)}
                                value = {nombre}
                                />
                                <label htmlFor="floatingInput">Nombre completo</label>
                            </div>



                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" 
                                onChange = {e => setcorreo(e.target.value)}
                                value = {correo}
                                />
                                <label htmlFor="floatingInput">Correo electrónico</label>
                            </div>

                            <div className="form-floating mb-3">

                                <label>Rol</label>

                                <select
                                    name="rol" 
                                    className="form-select"
                                    onChange = {e => setrol(e.target.value)}
                                    value = {rol}
                                    aria-label="Default select example">
                                    <option selected>Seleccione una opción</option>
                                    <option value="admin">Administrador</option>
                                    <option value="lider">Lider</option>
                                    <option value="estudiante">Estudiante</option>
                                </select>

                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                                onChange = {e => setcontrasena(e.target.value)}
                                value = {contrasena}/>
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="card-body">
                                    <Link type="button" className="btn btn-dark border-dark"
                                        to="/" >Atrás</Link>
                                </div>

                                <button type="submit" className="btn btn-success">Guardar</button>

                               {/*  <div className="card-body text-end">
                                    <Link type="button" className="btn btn-dark border-dark"
                                        to="/Ventas" >Guardar</Link>

                                </div> */}
                            </div>

                        </form>
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <br />
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://i1.wp.com/clipset.com/wp-content/uploads/2012/01/neuronal-twitter.jpeg?resize=500%2C500&ssl=1" className="d-block w-100" alt="..." height="600" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
    )
}

export default RegisterPage;