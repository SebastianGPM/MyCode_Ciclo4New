import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

function NavbarComponent() {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src="https://images.vexels.com/media/users/3/235446/isolated/preview/abbbf1e8a4b0e592ecc3413891ac3191-organos-n-cerebro-16.png" alt="" width="50" height="44" className="d-inline-block align-text-top" />
            
                    <Link to ='/' className="navbar-brand">GoFast</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to = '/Perfil'className="nav-link active" aria-current="page">Perfil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/proyecto' className="nav-link">Proyectos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/Usuario' className="nav-link">Usuarios</Link>
                            </li>

                        </ul>
                        <br /><br />
                        <form className="d-flex">
                            <br />
                            <input className="form-control me-2" type="search" placeholder="Escribe algo" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
export default NavbarComponent;