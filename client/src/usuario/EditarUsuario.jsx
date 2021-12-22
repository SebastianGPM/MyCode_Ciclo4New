import React, { Component } from 'react'
import { setErrors } from '../../../common/setError';
import Toolbar from '../../layout/toolbar';

export default class EditarUsuario extends Component {


    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            correo: '',
            pass: '',
            estado:'',
            rol:'',
            errors:{}
            // _id: ''
        };
        /* vincular */
        this.cacharCambio = this.cacharCambio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount(){

        const id = this.props.match.params.id;

        
    }

    /* captura los cambios de los imput (es llamado tambien handlechage) */
    cacharCambio = (e) => {

        /* requerir el valor de las propiedades del elementoa l cual apunta */
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]: value,
        });
    };


    validar = (nombre,correo,pass,estado,rol) => {
        const errors = setErrors(nombre,correo,pass,estado,rol);
        this.setState({errors: errors})
        return Object.values(errors).every((err) => err === "")
    }

    onSubmit = (e) => {
        e.preventDefault();

        const id = this.props.match.params.id;

        const {nombre,correo,pass,estado,rol} = this.state;

        if(this.validar(nombre,correo,pass,estado,rol)){
            
            const data = {
                nombre: nombre,
                correo: correo,
                pass: pass,
                estado: estado,
                rol: rol
            }
            console.log(data);

   
        }
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar/>

                <div className="col-md-10 mt-3 mx-auto">
                    <h1>Editar Usuario</h1>                
                    <form>
                        <div className="form-group mb-3">
                            <label>Nombre</label>
                            <input 
                                name="nombre" 
                                className="form-control"
                                type="text" 
                                placeholder="Ej: Roy Bareto"
                                onChange = {this.cacharCambio}
                                value = {this.state.nombre}                                      
                            />
                            {this.state.errors.nombre && (
                                <div className="text-danger">{this.state.errors.nombre}</div>
                            )}
                        </div>

                        <div className="form-group mb-3">
                        <label>Correo</label>
                            <input 
                                name="correo" 
                                className="form-control"
                                type="text" 
                                placeholder="Ej: roybar@gmail.com"
                                onChange = {this.cacharCambio}
                                value = {this.state.correo}
                            />
                            {this.state.errors.correo && (
                                <div className="text-danger">{this.state.errors.correo}</div>
                            )}
                        </div>

                        <div className="form-group mb-3">
                        <label>Contraseña</label>
                            <input 
                                name="pass" 
                                className="form-control"
                                type="password" 
                                placeholder="Ej: Y67Uij"
                                onChange = {this.cacharCambio}
                                value = {this.state.pass}
                            />
                            {this.state.errors.pass && (
                                <div className="text-danger">{this.state.errors.pass}</div>
                            )}
                        </div>

                        <div className="form-group mb-3">
                        <label>Estado</label>

                        <select
                            name="estado" 
                            className="form-select"
                            type="number" 
                            
                            onChange = {this.cacharCambio}
                            value = {this.state.estado}
                            aria-label="Default select example">
                            <option selected>Seleccione una opción</option>
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                            {/* <option value="3">Three</option> */}
                        </select>

                            {this.state.errors.estado && (
                                <div className="text-danger">{this.state.errors.estado}</div>
                            )}
                        </div>
                        

                        <div className="form-group mb-3">
                        <label>Rol</label>

                        <select
                            name="rol" 
                            className="form-control"
                            type="text" 
                            
                            onChange = {this.cacharCambio}
                            value = {this.state.rol}
                            aria-label="Default select example">
                            <option selected>Seleccione una opción</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Vendedor">Vendedor</option>
                            {/* <option value="3">Three</option> */}
                        </select>

                            {this.state.errors.rol && (
                                <div className="text-danger">{this.state.errors.rol}</div>
                            )}
                        </div>

                        

                        <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Guardar</button>

                    </form>
                    
                </div>
            </React.Fragment>

        )
    }
}

// export default CreatePage;
