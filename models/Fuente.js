import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Fuente = new Schema({
    tipoDeFuente:{type:String,required:true,unique:true},
    nombre:{type:String,required:true},
    description:{type:String}
});

export default mongoose.model('Fuente',Fuente);