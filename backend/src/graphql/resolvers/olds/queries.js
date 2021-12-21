const connectDB = require('./db.js')
/* convertir a tipo Id el id */
const {ObjectId} = require('mongodb')

module.exports = {

    /* ******USAURIOS******** */

    getUsuarios: async () => {
        let db
        let usuarios = []
        try {
            db = await connectDB()
            usuarios = await db.collection('usuarios').find().toArray()
        } catch (error) {
            console.log(error);
        }
        return usuarios
    },

    getUsuarioAuth: async (root, {correo,contrasena}) => {

        let db
        let usuarioAuth

        try {
            db = await connectDB()
            usuarioAuth = await db.collection('usuarios').findOne({correo: correo, contrasena:contrasena})

        } catch (error) {
            console.log(error);
        }
        return usuarioAuth
    },

    getUsuariosEstudiantes: async () => {

        let db
        let estudiante = []
        try {
            db = await connectDB()
            estudiante = await db.collection('usuarios').find({rol:"estudiante"}).toArray()

        } catch (error) {
            console.log(error);
        }
        return estudiante
    },



    /* ****PROYECT******* */

    /* que va  a pasar cuando llame a getProyectos */
    getProyectos: async () => {
        let db
        let proyectos = []
        try {
            db = await connectDB()
            proyectos = await db.collection('proyectos').find().toArray()
        } catch (error) {
            console.log(error);
        }
        return proyectos
    },

    getProyecto: async (root, {id}) => {

        let db
        let proyecto

        try {
            db = await connectDB()
            proyecto = await db.collection('proyectos').findOne({_id: ObjectId(id)})

        } catch (error) {
            console.log(error);
        }
        return proyecto
    },

    getProyectosActivos: async () => {

        let db
        let proyectosActs = []
        try {
            db = await connectDB()
            proyectosActs = await db.collection('proyectos').find({estado:true}).toArray()

        } catch (error) {
            console.log(error);
        }
        return proyectosActs
    }
}