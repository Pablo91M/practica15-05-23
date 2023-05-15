const express = require('express')
const { getProductos, getProductoById } = require('../src/controladores/productosControllers')
const productosRuta = express.Router()

productosRuta.get("/",getProductos)
productosRuta.get("/: id",getProductoById)

module.exports = {
    productosRuta
}