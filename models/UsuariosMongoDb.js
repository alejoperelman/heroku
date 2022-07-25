const ContainerMongoDb = require('./ContainerMongoDb');
const mongoose = require('mongoose');
const usuariosCollection = 'usuarios';

const UsuariosSchema = new mongoose.Schema({
    username: {type: String, required: true, max: 100},
    nombre: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    apellido: {type: String, required: true, max: 200},
    admin: {type: Boolean, required: true}
})

module.exports = module.exports = mongoose.model(usuariosCollection, UsuariosSchema) 