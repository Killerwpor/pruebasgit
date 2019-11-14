const mongoose=require('mongoose'); 

const esquemaUsuarios=mongoose.Schema({
    nombre: String,
    cedula: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('Usuarios',esquemaUsuarios);