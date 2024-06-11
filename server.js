const insertar = require('./functions/insertar.js')
const listar = require('./functions/listar.js');
const actualizar = require('./functions/actualizar.js');


const exp = require('constants');
const express = require('express');

const path = require('path');


const app = express();

const PORT = process.env.SERVER_PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/',(req,res)=>{

    res.sendFile(path.join(process.cwd(),'/pages/index.html'));

});

app.post('/post',async (req,res)=>{

    const { usuario, URL, descripcion} = req.body;

    try {

         const resultado = await insertar( usuario, URL, descripcion);
         res.sendStatus(200);
        
    } catch (error) {

        console.log(`X Error al insertar registro :`, error);

    }

});

app.get('/posts', async (req,res)=>{
    
    try {

        const resultado =  await listar();        
        res.json(resultado)

    } catch (error) {

        console.log(`X Error al obtener los posts:`,error);
        
    }

});

app.put('/post', async (req,res)=>{

    const { id } = req.query;

try {

    const resultado = await actualizar (id);
    res.json(resultado);
    
} catch (error) {
    
    console.log(`Error al aumentar los likes: `, error);

}    

});

app.listen(PORT,()=>{
    console.log(`Holiwis en PORT: ${PORT}`);
});