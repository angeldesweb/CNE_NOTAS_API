import {Fuente} from '../models';

const createFuente = async (args)=>{
    const fuente = new Fuente(args);
    try {
        const response = await fuente.save();
        return {
            status:200,
            success:true,
            message:'Registrado correctamente',
            fuente:response
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readAllFuentes = async ()=>{
    try {
        const fuentes = await Fuente.find()
        if(!fuentes.length){
            return {
                status:404,
                success:false,
                message:'Sin registros'
            }
        }
        return {
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            fuentes
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readFuenteById = async (args)=>{
    let fuenteid = args._id;
    try {
        const fuente = await Fuente.findById(fuenteid)
        if(!fuente){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        return {
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            fuente
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const readSomeFuentes = async (args)=>{
    try {
        const fuentes = await Fuente.find().where(args.key).equals(args.value)
        if(!fuentes.length){
            return {
                status:404,
                success:false,
                message:'No se encontraron registros'
            }
        }
        return{
            status:200,
            success:true,
            message:'Petición realizada con éxito',
            fuentes
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const updateFuente = async (args)=>{
    let fuenteid = args._id
    let update = args;
    try {
        const updated = await Fuente.findByIdAndUpdate(fuenteid,update);
        return {
            status:200,
            success:true,
            message:'Registro actualizado',
            fuente:updated
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const deleteFuente = async (args)=>{
    let fuenteid = args._id
    try {
        const Fuente = await Fuente.findById(fuenteid);
        if(!Fuente){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        await fuente.remove();
        return{
            status:200,
            success:true,
            message:'Registro eliminado'
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

export {
    createFuente,
    readAllFuentes,
    readFuenteById,
    updateFuente,
    deleteFuente,
    readSomeFuentes
}