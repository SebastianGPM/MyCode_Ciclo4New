const connectDB = require('./db.js')
/* convertir a tipo Id el id */
const {ObjectId} = require('mongodb')

module.exports = {
    /* USUARIOS */
    createUsuario: async (root, {input}) => {

        const defaults = {
            /* los no requeridos (!) pueden llevar vacio cpo default */
            nombre: '',
            proyectoInscrito: ''
        }

        const newUsuario = Object.assign(defaults, input)
        let db
        let usuario
        try {
            db = await connectDB()
            usuario = await db.collection('usuarios').insertOne(newUsuario)
            newUsuario._id = usuario.insertedId 
        } catch (error) {
            console.log(error);
        }
        return newUsuario
    },

    editUsuario: async (root, {_id, input}) => {

        let db
        let usuario
        try {
            db = await connectDB()
            await db.collection('usuarios').updateOne(
                {_id: ObjectId(_id)},
                {$set: input}
            )
            usuario = await db.collection('usuarios').findOne({_id: ObjectId(_id)})
        } catch (error) {
            console.log(error);
        }
        return usuario

    },

    editEstadoUsuario: async (root, {_id, input}) => {

        let db
        let usuario
        try {
            db = await connectDB()
            await db.collection('usuarios').updateOne(
                {_id: ObjectId(_id)},
                {$set: input}
            )
            usuario = await db.collection('usuarios').findOne({_id: ObjectId(_id)})
        } catch (error) {
            console.log(error);
        }
        return usuario

    },

    editEstadoEstudiante: async (root, {_id, input}) => {

        let db
        let estudiante
        try {
            db = await connectDB()
            await db.collection('usuarios').updateOne(
                {_id: ObjectId(_id)},
                {$set: input}
            )
            estudiante = await db.collection('usuarios').findOne({_id: ObjectId(_id), rol: "estudiante"})
        } catch (error) {
            console.log(error);
        }
        return estudiante

    },




    /* PROYECTS */
    /* que va  a pasar cuando llame a getProyectos */
    createProyecto: async (root, {input}) => {

        const defaults = {
            /* los no requeridos (!) pueden llevar vacio cpo default */
            descripcionProyecto: '',
            avance: ''
        }

        const newProyecto = Object.assign(defaults, input)
        let db
        let proyecto
        try {
            db = await connectDB()
            proyecto = await db.collection('proyectos').insertOne(newProyecto)
            newProyecto._id = proyecto.insertedId 
        } catch (error) {
            console.log(error);
        }
        return newProyecto
    },

    editProyecto: async (root, {_id, input}) => {

        let db
        let proyecto
        try {
            db = await connectDB()
            await db.collection('proyectos').updateOne(
                {_id: ObjectId(_id)},
                {$set: input}
            )
            proyecto = await db.collection('proyectos').findOne({_id: ObjectId(_id), estado: true})
        } catch (error) {
            console.log(error);
        }
        return proyecto

    },

    editEstadoProyecto: async (root, {_id, input}) => {

        let db
        let proyecto
        try {
            db = await connectDB()
            await db.collection('proyectos').updateOne(
                {_id: ObjectId(_id)},
                {$set: input}
            )
            proyecto = await db.collection('proyectos').findOne({_id: ObjectId(_id)})
        } catch (error) {
            console.log(error);
        }
        return proyecto

    },

    editFaseProyecto: async (root, {_id, input}) => {

        let db
        let proyecto
        try {
            db = await connectDB()
            await db.collection('proyectos').updateOne(
                {_id: ObjectId(_id)},
                {$set: input}
            )
            proyecto = await db.collection('proyectos').findOne({_id: ObjectId(_id)})
        } catch (error) {
            console.log(error);
        }
        return proyecto

    }

}