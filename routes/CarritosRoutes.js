const express = require('express');
const { Router } = express;
const cartsRouter = Router();

const { Carritos } = require('../dao/carritos/CarritosDaoArchivo');
const { Productos } = require('../dao/productos/ProductosDaoArchivo');

let carritosContainer = new Carritos();
let productosContainer = new Productos();

cartsRouter.get('/', async function (req, res) {
    let carts = await carritosContainer.getAll();
    res.json({carritos: carts});
});

cartsRouter.get('/:id/productos', async function (req, res) {
    let carrito = await carritosContainer.getById(req.params.id);
    res.json({productos: carrito});
});

cartsRouter.post('/', async function (req, res) {
    let cart = req.body;
    let newCart = null;
    if (cart && cart.fecha) {
        newCart = await carritosContainer.save();
        res.json({result: 'Carro Guardado', carrito: newCart});
    } else {
        res.json({result: 'Complete los datos'});
    }
});

cartsRouter.delete('/:id', async function (req, res) {
    let carrito = await carritosContainer.deleteById(req.params.id);
    res.json({productos: carrito});
});

cartsRouter.post('/:id/productos', async function(req, res) {
    let cart = await carritosContainer.getById(req.params.id);
    if (cart) {
        let cart = await carritosContainer.addProdToCart(req.params.id, req.body);
        res.json({result: 'Producto agregado al carrito', cart: cart});
    } else {
        res.json({result: 'Producto no agregado'});
    }
});

module.exports = {cartsRouter};