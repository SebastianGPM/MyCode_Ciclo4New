import React, { Component, useState } from 'react'
import Toolbar from '../layout/toolbar';
// import Axios from 'axios';
import { Link } from 'react-router-dom';
// import { setErrorsProy } from '../../../common/setErrorProy';
import{useMutation} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'

const CREATE_PROYECTO = gql`
  
    mutation CreateProyecto(   
        $nombreProyecto: String,
        $descripcionProyecto: String,
        $objetivoGeneral: String,
        $objetivosEspecificos: String,
        $estado: String,
        $fase: String,
        $presupuesto: String
    ){
        createProyecto(
            nombreProyecto: $nombreProyecto,
            descripcionProyecto: $descripcionProyecto,
            objetivoGeneral: $objetivoGeneral,
            objetivosEspecificos: $objetivosEspecificos,
            estado: $estado,
            fase: $fase,
            presupuesto: $presupuesto
        ){
            _id
        }
    }
`;

const CreateProyectoFr = () => {

    const [nombreProyecto, setnombreProyecto] = useState('')
    const [descripcionProyecto, setdescripcionProyecto] = useState('')
    const [objetivoGeneral, setobjetivoGeneral] = useState('')
    const [objetivosEspecificos, setobjetivosEspecificos] = useState('')
    const [estado, setestado] = useState('')
    const [fase, setfase] = useState('')
    const [presupuesto, setpresupuesto] = useState('')

    const [createProyecto] = useMutation(CREATE_PROYECTO)





    return (
 
            // <Toolbar/>

            <div className="col-md-10 mt-3 mx-auto">
                <h1>Crear Nuevo Proyecto</h1>
                
                    <form onSubmit={e => {
                        // e.preventDefault();
                        console.log(nombreProyecto);
                        createProyecto({variables:{nombreProyecto,descripcionProyecto,objetivoGeneral,objetivosEspecificos,estado,fase,presupuesto}})
                    }}>

                        <div className="form-group mb-3">
                            <label>Nombre del Proyecto</label>
                            <input 
                                name="nombreProyecto" 
                                className="form-control"
                                type="text" 
                                placeholder="Ej: ProyectoMyCode-004"
                                onChange = {e => setnombreProyecto(e.target.value)}
                                value = {nombreProyecto}                                      
                            />

                        </div>

                        <div className="form-group mb-3">
                            <label>Descripción del Proyecto</label>
                            <input 
                                name="descripcionProyecto" 
                                className="form-control"
                                type="text" 
                                placeholder="Ej: Redes Neuronales en C++"
                                onChange = {e => setdescripcionProyecto(e.target.value)}
                                value = {descripcionProyecto}                                      
                            />

                        </div>
                        
                        <div className="form-group mb-3">
                            <label>Objetivo General</label>
                            <input 
                                name="objetivoGeneral" 
                                className="form-control"
                                type="text" 
                                placeholder="Describa el principal objetivo del proyecto"
                                onChange = {e => setobjetivoGeneral(e.target.value)}
                                value = {objetivoGeneral}                                      
                            />
               
                        </div>

                        <div className="form-group mb-3">
                            <label>Objetivos Especificos</label>
                            <input 
                                name="objetivosEspecificos" 
                                className="form-control"
                                type="text" 
                                placeholder="Describa los objetivos especificos"
                                onChange = {e => setobjetivosEspecificos(e.target.value)}
                                value = {objetivosEspecificos}                                      
                            />
                      
                        </div>


                        <div className="form-group mb-3">
                            <label>Estado</label>

                            <select
                                name="estado" 
                                className="form-select"
                                type="number" 
                                placeholder="estado proyecto"
                                onChange = {e => setestado(e.target.value)}
                                value = {estado}
                                aria-label="Default select example">
                                <option selected>Seleccione una opción</option>
                                <option value="true">Activo</option>
                                <option value="false">Inactivo</option>
                            </select>

                  
                        </div>


                        <div className="form-group mb-3">
                            <label>Fase</label>

                            <select
                                name="fase" 
                                className="form-select"
                                type="number" 
                                placeholder="fase proyecto"
                                onChange = {e => setfase(e.target.value)}
                                value = {fase}
                                aria-label="Default select example">
                                <option selected>Seleccione una opción</option>
                                <option value="false">En Desarrollo</option>
                                <option value="true">Terminado</option>
                            </select>

                      
                        </div>


                        <div className="form-group mb-3">
                        <label>presupuesto</label>
                            <input 
                                name="presupuesto" 
                                className="form-control"
                                type="number" 
                                placeholder="Ej: 30000"
                                onChange = {e => setpresupuesto(e.target.value)}
                                value = {presupuesto}
                            />
                     
                        </div>
                        
                        <button type="submit" className="btn btn-success">Guardar</button>
                        {/* <Link to='/Proyecto' type="button" className="btn btn-success">Guardar</Link> */}

                    </form>
                
            </div>
        
    )
    
}

export default CreateProyectoFr;