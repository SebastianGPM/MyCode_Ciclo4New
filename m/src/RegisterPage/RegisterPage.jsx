import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import RegisterStyles from "./RegisterStyles.css"

function RegisterPage() {

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-items-center d-flex">
                        <br /><br />
                        <div className="container">

                            <h1>Registro</h1>
                            <br />
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="Pedro José López Hurtado" />
                                <label htmlFor="floatingInput">Nombre completo</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="30120304556" />
                                <label htmlFor="floatingInput">Documento de identidad</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Correo electrónico</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="Pedro José López Hurtado" />
                                <label htmlFor="floatingInput">Rol</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="card-body">
                                    <Link type="button" className="btn btn-light border-dark"
                                        to="/" >Atrás</Link>
                                </div>

                                <div className="card-body text-end">
                                    <Link type="button" className="btn btn-dark border-dark"
                                        to="/Perfil" >Guardar</Link>

                                </div>
                            </div>

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
        </Fragment>
    )
}

export default RegisterPage;