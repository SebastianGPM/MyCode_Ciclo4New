import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
    nombre: { type: String},
    correo: { type: String},
    contrasena: { type: String},
    rol: { type: String},
    estado: { type: Boolean},
    proyectoInscrito: { type: String}
});

export default model('Usuario', usuarioSchema)