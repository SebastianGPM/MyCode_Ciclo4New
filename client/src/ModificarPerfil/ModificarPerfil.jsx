import React from "react";
import { Link } from "react-router-dom";

function ModificarPerfil() {


    return (
        <div className="row">
            <div className="col-3"></div>

            <div className="col-6">
                <div className="container text-center">
                    {/* <h1>Perfil de usuario</h1> */}

                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <img src="https://pm1.narvii.com/6751/1abdde5ef50294a0588c70d0acfca5dbc73c0ff1v2_hq.jpg" />
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Datos personales</h5>
                                    <br />
                                    <div className="row">
                                        <div className="col">
                                            <h6>Nombre completo</h6>
                                        </div>
                                        <div className="col">
                                            <input className=" border-dark"
                                                type="text"
                                                placeholder="Pepito Pérez">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h6>Número de documento</h6>
                                        </div>
                                        <div className="col">
                                            <input className=" border-dark"
                                                type="number"
                                                placeholder="101525321">
                                            </input>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <h6>Tipo de usuario</h6>
                                        </div>
                                        <div className="col">
                                            <input className=" border-dark"
                                                type="text"
                                                placeholder="Administrador">
                                            </input>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <h6>Correo</h6>
                                        </div>
                                        <div className="col">
                                            <input className=" border-dark"
                                                type="text"
                                                placeholder="ejemplo@gmail.com">
                                            </input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <br />
                                    <Link to='/Perfil' type="button" class="btn btn-light border-dark">Ir a la página anterior</Link>
                                </div>


                                <div className="col">
                                    <br />
                                    <Link to="/Perfil" type="button" class="btn btn-dark">Guardar datos personales</Link>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-3"></div>
        </div>
    )
}

export default ModificarPerfil;