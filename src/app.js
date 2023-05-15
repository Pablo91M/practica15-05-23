const express = require('express') //requiero la libreria
const PORT = 3001 //defino el puerto

const app = express()
app.get("/",(req,res)=>{
    res.status(200).json({"mensaje": "hola mundo!"})
})

app.listen(PORT, ()=>{console.log(`escuchando en el puerto ${PORT}`)})