// https://cdn-icons-png.flaticon.com/512/56/56749.png
import React from "react";
import { Link } from "react-router-dom"
import { Fragment } from "react"

function AvancesPage() {

    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                <div className="card text-center" style={{ fontSize: 50 }}>
                    <h1>Avances</h1>
                </div>

                <div className="card-body border">
                    <h6>Aquí irán las descripciones de los avances del proyecto así que vamos viendo cómo se va comportando, proque lo mejor si es así</h6>
                </div>


                <div className="row text-center">
                    <div className="col ">
                        <Link to="/MisProyectos" type="button" class="btn btn-light border-dark">Página anterior</Link>
                    </div>
                    <div className="col">
                    <Link to="/Perfil" type="button" class="btn btn-dark">Guardar avances</Link>
                </div>
                </div>


            </div>

            <div className="col-3"></div>
        </div>
    )
}

export default AvancesPage;