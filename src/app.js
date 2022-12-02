//Framework EXPRESS.
import express from 'express';
//BASE DE DATOS.
import {sql} from './db.js'
//PUERTO DEL SERVIDOR.
import {PORT} from './configuracion.js'

const app = express();


app.get('/', async (req,res)=>{
    const [clientes] = await sql.query('SELECT * FROM cliente')
    res.json(clientes);
});

app.get('/ping', async (req,res)=>{
    const [result] = await sql.query(`SELECT 'INGRESO' as Resultado`);
    res.json(result[0])
});

app.get('/create' , async (req,res) =>{
    const result = await sql.query('INSERT INTO cliente(name) VALUES ("KEVIN")')
    res.json(result)
})

app.listen(PORT)
console.log('Esta corriendo en el servidor', PORT)