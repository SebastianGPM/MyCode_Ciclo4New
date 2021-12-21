import Proyecto from "../../models/Proyecto";

const Mutation = {

    createProyecto: async (root, {nombreProyecto,descripcionProyecto,objetivoGeneral,objetivosEspecificos,estado,fase,presupuesto}) => {
        const newProy = new Proyecto({nombreProyecto,descripcionProyecto,objetivoGeneral,objetivosEspecificos,estado,fase,presupuesto});
        return await newProy.save();


    }

}

export default Mutation;


