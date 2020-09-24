import {Ficha} from '../models';

const createFicha = async (args)=>{
    const ficha = new Ficha(args);
    try {
        const response = await ficha.save();
        return {
            status:200,
            success:true,
            message:'Registrado correctamente',
            ficha:response
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readAllFichas = async ()=>{
    try {
        const fichas = await Ficha.find().populate('fuente').populate('clasificacion')
        if(!fichas.length){
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
            fichas
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readFichaById = async (args)=>{
    let fichaid = args._id;
    try {
        const ficha = await Ficha.findById(fichaid).populate('fuente').populate('clasificacion')
        if(!ficha){
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
            ficha
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const readSomeFichas = async (args)=>{
    try {
        const fichas = await Ficha.find().where(args.key).equals(args.value).populate('fuente').populate('clasificacion')
        if(!fichas.length){
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
            fichas
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const updateFicha = async (args)=>{
    let fichaid = args._id
    let update = args;
    try {
        const updated = await Ficha.findByIdAndUpdate(fichaid,update);
        return {
            status:200,
            success:true,
            message:'Registro actualizado',
            ficha:updated
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const deleteFicha = async (args)=>{
    let fichaid = args._id
    try {
        const ficha = await Ficha.findById(fichaid);
        if(!ficha){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        await ficha.remove();
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
    createFicha,
    readAllFichas,
    readFichaById,
    updateFicha,
    deleteFicha,
    readSomeFichas
}