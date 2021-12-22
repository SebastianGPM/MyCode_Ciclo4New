/* const connectDB = require('./db.js')
const {ObjectId} = require('mongodb') */

/* importar modelo */
import Proyecto from "../../models/Proyecto";
import Usuario from "../../models/Usuario";

const Query = {

    ping(){
        return "pong"
    },

    proyectos: async ()=>{
        return await Proyecto.find()
    },

    usuarios: async ()=>{
        return await Usuario.find()
    }

}

export default Query;
