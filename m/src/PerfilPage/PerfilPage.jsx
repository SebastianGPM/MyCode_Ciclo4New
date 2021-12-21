import React from "react";
import ModificarPerfil from "../ModificarPerfil/ModificarPerfil";
import { Link } from "react-router-dom";

function PerfilPage() {


    return (
        <div className="container text-center">
            {/* <h1>Perfil de usuario</h1> */}

            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <div class="card">

                        <img src="https://pm1.narvii.com/6751/1abdde5ef50294a0588c70d0acfca5dbc73c0ff1v2_hq.jpg" />
                        <div class="card-body">
                            <h5 class="card-title">Datos personales</h5>
                            <br />
                            <div className="row">
                                <div className="col">
                                    <h6>Nombre completo</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-2 text-muted">Pepito Pérez</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>Número de documento</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-2 text-muted">101525321</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>Tipo de usuario</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-2 text-muted">Administrador</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>Correo</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-2 text-muted">ejemplo@gmail.com</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>Contraseña</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-2 text-muted">***************</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <br />
                            <button type="button" class="btn btn-light border-dark">Ir a la página anterior</button>
                        </div>


                        <div className="col">
                            <br />
                            <Link to="/EditarPefil" type="button" class="btn btn-secondary">Modificar datos personales</Link>
                        </div>

                    </div>
                          <br />                  
                    <div className="row text">
                            <br />
                            <Link to="/MisProyectos" type="button" class="btn btn-dark">Ver proyectos</Link>
                        </div>
                </div>
                <div className="col-3">
                    
                </div>
            </div>


            <br />
        </div>
    )
}

export default PerfilPage;