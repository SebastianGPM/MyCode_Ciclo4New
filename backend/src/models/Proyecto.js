import { Schema, model } from "mongoose";

const proyectoSchema = new Schema({
    nombreProyecto: { type: String},
    descripcionProyecto: { type: String},
    objetivoGeneral: { type: String},
    objetivosEspecificos: { type: String},
    estado: { type: String},
    fase: { type: String},
    presupuesto: { type: String},
    avance: { type: String}
});

export default model('Proyecto', proyectoSchema)