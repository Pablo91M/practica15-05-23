const express = require('express') //requiero la libreria
const { productosRuta } = require('../rutas/productos-ruta')
const PORT = 3001 //defino el puerto

const app = express()
app.use(express.json())
app.use("/api/productos",productosRuta) //indico que use la ruta

app.listen(PORT, ()=>{console.log(`escuchando en el puerto ${PORT}`)})