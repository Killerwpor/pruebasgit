const express=require('express');
const router=express.Router(); 

router.get('/',(req,res)=> {
res.send('Estas en publicaciones');
});


module.exports=router;