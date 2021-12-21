import React from "react";
import {Link} from "react-router-dom"

function InscripcionesPage() {

    return(
        <div className="container text-center">
            {/* <h1>Perfil de usuario</h1> */}

            <div className="row card">
                <div className="col">
                    <div className="row container">
                        <img src="https://i.pinimg.com/originals/89/0c/04/890c04d53f9434c98649914f5fc073fc.jpg" />
                    </div>
                    <div class="">
                        <div class="card-body">
                            <h4 class="card-title">Información del proyecto</h4>
                            <br />
                            <div className="row">
                                <div className="col">
                                    <h6>Nombre del proyecto</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-3 text-muted">Aquí irá el nombre completo del proyecto</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>Descripción del proyecto</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-3 text-muted">Aquí irá una descripción del proyecto en donde se podrá brindar una vista sobre las generalidades de éste</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>Objetivo general</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-3 text-muted">Aquí irá el objetivo general del proyecto</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>Objetivos específicos</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-2 text-muted">Aquí irán los objetivos específicos</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>Estado</h6>
                                </div>
                                <div className="col">
                                    <h6 class="card-subtitle mb-3 text-muted">Activo o Inactivo</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            
                            <Link to="/Perfil" type="button" class="btn btn-light border-dark">Ir a la página anterior</Link>
                        </div>
                        <div className="col">
                            
                            <Link to= "/Pefil" type="button" class="btn btn-dark">Inscribirme a este proyecto</Link>
                        </div>
                    </div>
                    <br />
                </div>
                
            </div>
        </div>
    )
}

export default InscripcionesPage;