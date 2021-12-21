import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

function LoginPage() {

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <br />
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://lh3.googleusercontent.com/proxy/oLGfEiqJTHsDqS7d1Z3ijQ6gkmp6JlLtDW9p1nMmB-Cr64p70jpnJcPlgBtOEsfoK_HNh-fGUxEH0BOs3MjY4ehnsJmdOMC-kW7BY2VWVmfIhT3COjJOG_2te81hV0WMlV69YZeg83S-hXhmEF2YAF6nbEM8m_4" className="d-block w-100" alt="..." height="600" />
                                </div>
                                <div className="carousel-item active">
                                    <img src="https://m.media-amazon.com/images/I/71oIevssD+L._AC_SS450_.jpg" className="d-block w-100" alt="..." height="600" />
                                </div>
                                <div className="carousel-item active">
                                    <img src="https://m.media-amazon.com/images/I/717giuyj9gL._AC_SL1000_.jpg" className="d-block w-100" alt="..." height="600" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 align-items-center d-flex">
                        <br /><br />
                        <div className="container">

                            <h1>Iniciar sesión</h1>
                            <br />
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Correo electrónico</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <br />
                                    <Link to="/Register" >Registrate aquí</Link>
                                </div>
                                <div className="col">
                                    <div className="d-flex justify-content-between">
                                        <div className="card-body text-end">
                                            <Link type="button" className="btn btn-dark border-dark"
                                                to="/Proyecto" >Entrar</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* <div className="row">
                                <div className="col">
                                    <br />
                                    <Link to="/Register" >Registrate aquí</Link>
                                </div>
                                <div className="col">
                                    <br />
                                    <Link to="/HomePage"><button type="button" className="btn btn-dark text-end">Inciar sesión</button></Link>
                                    <br />
                                </div>
                            </div> */}


                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default LoginPage;