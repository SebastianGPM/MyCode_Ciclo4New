import React from "react";
import { Link } from "react-router-dom";

function ModificarPerfil() {


    return (
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
                            <div className="row">
                                <div className="col">
                                    <h6>Contraseña</h6>
                                </div>
                                <div className="col">
                                <input className=" border-dark"
                                        type="password"
                                        placeholder="Nueva contraseña">
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
                            <button type="button" class="btn btn-dark">Guardar datos personales</button>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="col">
                    <div className="col">
                        <br />
                        <h1>Perfil de usuario</h1>
                        <br />
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="card-header text-black bg-white border-dark">
                                    <h3>Proyectos</h3>
                                </div>
                                <p></p>
                                <div class="list-group">
                                    <Link href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Nombre de primer poryecto</h5>
                                            <small>Estado: activo</small>
                                        </div>
                                        <p class="mb-1">Descripción breve del proyecto</p>
                                        <small>Presupuesto: 1000000</small>
                                    </Link>
                                    <Link to="/" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Nombre del segundo proyecto</h5>
                                            <small class="text-muted">Estado: inactivo</small>
                                        </div>
                                        <p class="mb-1">Descripción breve del proyecto</p>
                                        <small class="text-muted">Presupuesto: 59000</small>
                                    </Link>
                                    <Link to="/" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Nombre del tercer proyecto</h5>
                                            <small class="text-muted">Estado: Activo</small>
                                        </div>
                                        <p class="mb-1">Descripción breve del proyecto</p>
                                        <small class="text-muted">Presupuesto: 10000</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModificarPerfil;