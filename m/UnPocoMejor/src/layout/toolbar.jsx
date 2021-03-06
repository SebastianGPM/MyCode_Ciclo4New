// import { faBoxes, faDatabase, faHome, faMoneyBillAlt, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
// import {useAuth0} from "@auth0/auth0-react";

function Toolbar(){

    // const{logout} = useAuth0();
    

        return(
            <div>

                <div className="Toolbar">
                    <div className="container-fluid">
                        <div className="row">
                            
                            <div className="col-md-6 tool-cont">

                                <Link className="lk-new-contact" to="/">
                                    <div >
                                        {/* <FontAwesomeIcon className="iconoX" icon={faHome} onClick={() => logout()}/> */}
                                        {/* <p>Inicio</p> */}

                                    </div>
                                    
                                </Link>
{/* 
                                <Link className="lk-new-contact" to="/venta">
                                    <div >
                                        <FontAwesomeIcon className="iconoX" icon={faMoneyBillAlt}/>
                                        <p>Ventas</p>

                                    </div>
                                    
                                </Link>

                                <Link className="lk-new-contact" to="/producto">
                                    <div >
                                    <FontAwesomeIcon className="iconoX" icon={faBoxes}/>
                                        <p>Productos</p>

                                    </div>
                                    
                                </Link>
 */}
                                <Link className="lk-new-contact" to="/usuario">
                                    <div >
                                        {/* <FontAwesomeIcon className="iconoX" icon={faUser}/> */}
                                        {/* <i class="fas fa-user"></i> */}
                                        {/* <p>Usuarios</p> */}

                                    </div>
                                    
                                </Link>

                                <Link className="lk-new-contact" to="/proyecto">
                                    <div >
                                    {/* <FontAwesomeIcon className="iconoX" icon={faBoxes}/> */}
                                        {/* <p>Proyectos</p> */}

                                    </div>
                                </Link>

                            </div>
                            <div className="col-md-6">
                                <Link className="lk-new-contact" to="/add">
                                    <div >
                                        {/* <FontAwesomeIcon className="iconoX" icon={faDatabase}/> */}
                                        {/* <p>Nuevo Usuario</p> */}

                                    </div>
                                    
                                </Link>

                               {/*  <Link className="lk-new-contact" to="/addProducto">
                                    <div >
                                        <FontAwesomeIcon className="iconoX" icon={faDatabase}/>
                                        <p>Nuevo Producto</p>

                                    </div>
                                    
                                </Link>

                                <Link className="lk-new-contact" to="/nventa">
                                    <div >
                                        <FontAwesomeIcon className="iconoX" icon={faDatabase}/>
                                        <p>Nueva Venta</p>

                                    </div>
                                    
                                </Link> */}


                                <Link className="lk-new-contact" to="/addProyecto">
                                    <div >
                                        {/* <FontAwesomeIcon className="iconoX" icon={faDatabase}/> */}
                                        {/* <p>Nuevo Proyecto</p> */}

                                    </div>
                                </Link>
                            </div>
                        </div>                 
                    </div>
                </div>

            </div>
        )
}



export default Toolbar;