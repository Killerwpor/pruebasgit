const express=require('express');
const router=express.Router(); 
const Usuarios=require('../modelos/usuarios');

router.get('/',async (req,res)=> {    
 
    const usuarios= await Usuarios.find({});
        res.json(200,usuarios);
   
  //  console.log(usuariosR);
    //res.json(usuarios);
   
  
   
    
    

});

router.post('/',(req,res)=>{

    const usuario=new Usuarios({
        nombre: req.body.nombre,
        cedula: req.body.cedula
    });

    usuario.save()
    .then(data=>    {
        res.json(req.body);
    })

    .catch(err=>{
        res.json({message: err});
    });


});


module.exports=router;