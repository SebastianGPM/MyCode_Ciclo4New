import React, { Component } from 'react'
import Toolbar from '../layout/toolbar';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import { setErrorsProy } from '../../../common/setErrorProy';

export default class CreateProyecto extends Component {

    constructor(props){

        super(props);
        this.state = {
            nombreProyecto: '',
            descripcionProyecto: '',
            objetivoGeneral: '',
            objetivosEspecificos: '',
            estado: false,
            fase: false,
            presupuesto: 0,
            errors:{}
        };
        /* vincular */
        this.cacharCambio = this.cacharCambio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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


/*     validar = (nombreProyecto, descripcionProyecto, objetivoGeneral, objetivosEspecificos, estado, fase, presupuesto) => {
        const errors = setErrorsProy(nombreProyecto, descripcionProyecto, objetivoGeneral, objetivosEspecificos, estado, fase, presupuesto);
        this.setState({errors: errors})
        return Object.values(errors).every((err) => err === "")
    } */

    onSubmit = (e) => {
        e.preventDefault();

        const {nombreProyecto, descripcionProyecto, objetivoGeneral, objetivosEspecificos, estado, fase, presupuesto} = this.state;

        const data = {

            nombreProyecto:nombreProyecto, 
            descripcionProyecto:descripcionProyecto, 
            objetivoGeneral:objetivoGeneral, 
            objetivosEspecificos:objetivosEspecificos, 
            estado:estado, 
            fase:fase, 
            presupuesto:presupuesto
        }
        console.log(data);
        Axios.post("/Rproyecto/addProyecto", data).then((res) => {
            console.log(res);
            if(res.data.success){
                alert("Proyecto Agregado Correctamente");
                this.setState({
                    nombreProyecto: '',
                    descripcionProyecto: '',
                    objetivoGeneral: '',
                    objetivosEspecificos: '',
                    estado: false,
                    fase: false,
                    presupuesto: 0
                })

            }
        })

    /*     if(this.validar(nombreProyecto, descripcionProyecto, objetivoGeneral, objetivosEspecificos, estado, fase, presupuesto)){
 
        } */

    }

    render() {
        return (
            <React.Fragment>
                <Toolbar/>

                <div className="col-md-10 mt-3 mx-auto">
                    <h1>Crear Nuevo Proyecto</h1>
                    
                        <form>

                            <div className="form-group mb-3">
                                <label>Nombre del Proyecto</label>
                                <input 
                                    name="nombreProyecto" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="Ej: ProyectoMyCode-004"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.nombreProyecto}                                      
                                />
                                {this.state.errors.nombreProyecto && (
                                    <div className="text-danger">{this.state.errors.nombreProyecto}</div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                                <label>Descripción del Proyecto</label>
                                <input 
                                    name="descripcionProyecto" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="Ej: Redes Neuronales en C++"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.descripcionProyecto}                                      
                                />
                                {this.state.errors.descripcionProyecto && (
                                    <div className="text-danger">{this.state.errors.descripcionProyecto}</div>
                                )}
                            </div>
                            
                            <div className="form-group mb-3">
                                <label>Objetivo General</label>
                                <input 
                                    name="objetivoGeneral" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="Describa el principal objetivo del proyecto"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.objetivoGeneral}                                      
                                />
                                {this.state.errors.objetivoGeneral && (
                                    <div className="text-danger">{this.state.errors.objetivoGeneral}</div>
                                )}
                            </div>

                            <div className="form-group mb-3">
                                <label>Objetivos Especificos</label>
                                <input 
                                    name="objetivosEspecificos" 
                                    className="form-control"
                                    type="text" 
                                    placeholder="Describa los objetivos especificos"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.objetivosEspecificos}                                      
                                />
                                {this.state.errors.objetivosEspecificos && (
                                    <div className="text-danger">{this.state.errors.objetivosEspecificos}</div>
                                )}
                            </div>


                            <div className="form-group mb-3">
                                <label>Estado</label>

                                <select
                                    name="estado" 
                                    className="form-select"
                                    type="number" 
                                    placeholder="estado proyecto"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.estado}
                                    aria-label="Default select example">
                                    <option selected>Seleccione una opción</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Inactivo">Inactivo</option>
                                </select>

                                {this.state.errors.estado && (
                                    <div className="text-danger">{this.state.errors.estado}</div>
                                )}
                            </div>


                            <div className="form-group mb-3">
                                <label>Fase</label>

                                <select
                                    name="fase" 
                                    className="form-select"
                                    type="number" 
                                    placeholder="fase proyecto"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.fase}
                                    aria-label="Default select example">
                                    <option selected>Seleccione una opción</option>
                                    <option value="En Desarrollo">En Desarrollo</option>
                                    <option value="Terminado">Terminado</option>
                                </select>

                                {this.state.errors.fase && (
                                    <div className="text-danger">{this.state.errors.fase}</div>
                                )}
                            </div>


                            <div className="form-group mb-3">
                            <label>presupuesto</label>
                                <input 
                                    name="presupuesto" 
                                    className="form-control"
                                    type="number" 
                                    placeholder="Ej: 30000"
                                    onChange = {this.cacharCambio}
                                    value = {this.state.presupuesto}
                                />
                                {this.state.errors.presupuesto && (
                                    <div className="text-danger">{this.state.errors.presupuesto}</div>
                                )}
                            </div>
                            
                            {/* <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Guardar</button> */}
                            <Link to='/Proyecto' type="button" className="btn btn-success">Guardar</Link>

                        </form>
                    
                </div>
            </React.Fragment>
        )
    }
}