const ContainerMongoDb = require('./ContainerMongoDb');
const mongoose = require('mongoose');
//const modelProd = require('../../models/productos');

//No se porque no me tomaba el modelo tuve que trae el squema hasta el dao
const ProductosSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 100},
    descripcion: {type: String, required: true, max: 200},
    precio: {type: Number, required: true},
    foto: {type: String, required: false, max: 100},
    codigo: {type: String, required: true},
    fecha: {type: Date, default: Date.now, required: false}
  })

class ProductosDaoMongoDb extends ContainerMongoDb {
    constructor() {
       super('productos',ProductosSchema);
       let productos = this.getAll();
    }
}

module.exports = {ProductosDaoMongoDb} ;