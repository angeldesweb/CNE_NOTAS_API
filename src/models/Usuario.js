import mongoose, { deleteModel } from 'mongoose'

const Schema = mongoose.Schema;

const Usuario = new Schema({
    tipoCedula:{type:String,required:true},
    cedula:{type:String,required:true,unique:true},
    nombre:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date},
    role:{type:String,enum:['Basico','Intermedio','Avanzado']}
});

export default mongoose.model('Usuario',Usuario);