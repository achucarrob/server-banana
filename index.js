// const express = require("express"); we use the next line instead
import express from 'express'
// instancia de express
const app = express();
const port = 5000;

import { routerApi } from './routes/index.js'
// const routerApi = require('./routes')
// import { pool } from './services/db_connect.js';

// Rutas
app.post('/create', (req,res) => {
    res.send('Agregar un libro a la lista')
});

app.delete('/delete', (req,res) => {
    res.send('Borrar una wea')
});

// app.patch('/patch/:id', (req, res) => {
//     const id = req.params.id
//     // const boolean = req.params.boolean
//     pool.query('UPDATE public.todoss SET is_completed=true WHERE id= $1 RETURNING *', [id], 
//     (err, result) => {
//         res.json(result.rows)
//     });
// });

routerApi(app);

app.listen(port, () => {
    // pool.connect(
    //     (err , client , done) => {
    //         if (err) {
    //             console.log('Por ahi no es reina :/ ')
    //         } else {
    //             console.log('El poder de Grimes esta contigo')
    //             done()};
    //     });
    // console.log(`Example app listening on port ${port}`)
    console.log(`Run the server at http://127.0.0.1:${port}/`)
});
