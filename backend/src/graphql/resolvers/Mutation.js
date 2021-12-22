import Proyecto from "../../models/Proyecto";
import Usuario from "../../models/Usuario";

const Mutation = {

    createProyecto: async (root, {nombreProyecto,descripcionProyecto,objetivoGeneral,objetivosEspecificos,estado,fase,presupuesto}) => {
        const newProy = new Proyecto({nombreProyecto,descripcionProyecto,objetivoGeneral,objetivosEspecificos,estado,fase,presupuesto});
        return await newProy.save();
    },

    createUsuario: async (root, {nombre,correo,contrasena,rol,estado}) => {
        const newUsu = new Usuario({nombre,correo,contrasena,rol,estado});
        return await newUsu.save();
    }

}

export default Mutation;


