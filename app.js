const express=require("express");
const app=express();
const bodyParser=require('body-parser');
//EXPORTO LAS RUTAS DE LA API
const rutasPublicaciones=require('./rutas/publicaciones')
const rutasUsuarios=require('./rutas/usuarios')
const mongoose = require('mongoose');




//Middlewares
app.use(bodyParser.json());
app.use('/publicaciones',rutasPublicaciones);
app.use('/usuarios',rutasUsuarios);

//Conección a la DB

mongoose.connect('mongodb://localhost/dbPrueba', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function(){
    console.log("Conectado a la BD correctamente");
});


//ESCUCHANDO
app.listen(3000);













/*app.use('/post',function(req, res, next){
console.log('This is a middleware running');
//next();
});*/


