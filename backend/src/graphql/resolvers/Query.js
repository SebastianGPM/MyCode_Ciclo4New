/* const connectDB = require('./db.js')
const {ObjectId} = require('mongodb') */

/* importar modelo */
import Proyecto from "../../models/Proyecto";

const Query = {

    ping(){
        return "pong"
    },

    proyectos: async ()=>{
        return await Proyecto.find()

    }

}

export default Query;
