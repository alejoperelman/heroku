const mongoose = require('mongoose');
const mensajesCollection = 'mensajes';
const URIMDB = 'mongodb+srv://dbAdmin:Qy3k2xeRFQ4jBze@apibackend.hutlo.mongodb.net/ecommerce?retryWrites=true&w=majority';

//const modelProd = require('../../models/productos');
let ObjectId = require("mongodb").ObjectId

const MensajesSchema = new mongoose.Schema({
    author: {   id: {type: Number},
                email: {type: String},
                nombre: {type: String},
                apellido: {type: String},
                edad: {type: Number},
                alias: {type: String},
                avatar: {type: String}},
    text: {type: String}
})

class MensajesMdb {
    constructor() {
        mongoose.connect(URIMDB, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }, () => console.log('DBConectada Mensajes'))
        this.modelo = mongoose.model(mensajesCollection, MensajesSchema);
        }
  
    async getAll(){
      return await this.modelo.find({});
    }
  
    async postMsg(item) {
        console.log('Save Msg');
        const saveModel = new this.modelo(item);
        let newItem = await saveModel.save();
        console.log(newItem);
        return newItem
    }
}

module.exports = {MensajesMdb}
