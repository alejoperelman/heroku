const { faker } = require('@faker-js/faker');
faker.locale = 'es';
const { commerce, image, random } = faker;

class ProductosFaker {
        
        getProductsFake() {
            let prodSchema = [];
            let obj;
            for (let i = 0; i < 5; i++) {
                obj = {
                        id:random.numeric(4),
                        nombre: commerce.product(),
                        descripcion: commerce.productDescription(),
                        foto: image.imageUrl(),
                        precio:commerce.price(), 
                        codigo: random.numeric(7),
                        fecha:Date()
                    };
                prodSchema.push(obj);
            }
        return prodSchema;
        }
}

module.exports = {ProductosFaker}