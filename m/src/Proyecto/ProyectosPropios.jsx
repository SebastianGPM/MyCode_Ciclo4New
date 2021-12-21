import React from "react";
import { Link } from "react-router-dom";

function ProyectosPropios() {

    return (
        <div className="row">
            <div className="col-3">

            </div>

            <div className="col-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="card-header text-black text-center bg-white border-dark">
                                <h2>Mis proyectos</h2>
                            </div>
                            <p></p>
                            <div class="list-group">
                                <Link href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">Nombre de primer poryecto</h5>
                                        <small>Estado: activo</small>
                                        <div>
                                            <Link to="/Avances" type="button" className="btn btn-outline-light text-dark border-dark">Avances</Link>
                                        </div>
                                    </div>
                                    <p class="mb-1">Descripción breve del proyecto</p>
                                    <small>Presupuesto: 1000000</small>
                                </Link>
                                <Link to="/" class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">Nombre del segundo proyecto</h5>
                                        <small class="text-muted">Estado: inactivo</small>
                                        <div>
                                            <Link to="/Avances" type="button" className="btn btn-outline-primary border-dark">Avances</Link>
                                        </div>
                                    </div>
                                    <p class="mb-1">Descripción breve del proyecto</p>
                                    <small class="text-muted">Presupuesto: 59000</small>
                                </Link>
                                <Link to="/" class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">Nombre del tercer proyecto</h5>
                                        <small class="text-muted">Estado: Activo</small>
                                        <div>
                                            <Link to="/Avances" type="button" className="btn btn-outline-primary">Avances</Link>
                                            
                                        </div>
                                    </div>
                                    <p class="mb-1">Descripción breve del proyecto</p>
                                    <small class="text-muted">Presupuesto: 10000</small>

                                </Link>
                            </div>
                            <br />
                            <Link to="/Perfil" type="Button" className="btn btn-outline-primary">Volver a perfil</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-3">

            </div>
        </div>
    )
}

export default ProyectosPropios;