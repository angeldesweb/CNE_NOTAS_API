import bcrypt from 'bcryptjs';
import { Usuario } from '../models'
import {formatErrors} from './Errors'
import auth from '../middlewares/auth'

const SignIn = async(args)=>{
    try {
        const response = await auth.login(args)
        return {
            success:true,
            status:200,
            message:'Petición realizada con éxito',
            token:response.token,
            usuario:response.usuario
        }
    } catch (error) {
        return {
            success:false,
            status:500,
            message:formatErrors({errors:response.errors})
        }
    }
}

const SignUp = async (args)=>{
    const saltpass = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(args.password,saltpass,null);
    args.password = hashpass
    try {
        const usuario = new Usuario(args)
        const response = usuario.save()
        return {
            success:true,
            status:200,
            message:'Petición realizada con éxito',
            usuario:response
        }
    } catch (error) {
        return {
            success:false,
            status:500,
            message:formatErrors({errors:response.errors})
        }
    }
}

const readAllUsuarios = async (args)=>{
    try {
        const usuarios = await Usuario.find()
        if(!usuarios.length){
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
            usuarios
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se encontraron errores'
        }
    }
}

const readSomeUsuarios = async (args)=>{
    try {
        const usuarios = await Usuario.find().where(args.key).equals(args.value)
        if(!usuarios.length){
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
            usuarios
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const readUsuarioById = async (args)=>{
    let usuarioid = args._id;
    try {
        const usuario = await Usuario.findById(usuarioid)
        if(!usuario){
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
            usuario
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const updateUsuario = async (args)=>{
    let usuarioid = args._id
    let update = args;
    try {
        const updated = await Usuario.findByIdAndUpdate(usuarioid,update);
        return {
            status:200,
            success:true,
            message:'Registro actualizado',
            usuario:updated
        }
    } catch (error) {
        return {
            status:500,
            success:false,
            message:'Se han encontrado errores'
        }
    }
}

const deleteUsuario = async (args)=>{
    let usuarioid = args._id
    try {
        const usuario = await Usuario.findById(usuarioid);
        if(!usuario){
            return{
                status:404,
                success:false,
                message:'No se encontró el registro'
            }
        }
        await usuario.remove();
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
    SignIn,
    SignUp,
    readAllUsuarios,
    readUsuarioById,
    readSomeUsuarios,
    updateUsuario,
    deleteUsuario
}