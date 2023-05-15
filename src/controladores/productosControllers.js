const getProductos = (req,res)=>{
    res.status(200).json({"mensaje": "hola mundo!"})
}
const getProductoById =(req,res)=>{
    const id = req.params.id
    res.status(200).json({"mensaje": `Consulto el prodcuto ${id}`})
}

module.exports ={getProductos,getProductoById}