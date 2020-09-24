import {
    SignIn,SignUp,
    readAllUsuarios,readSomeUsuarios,readUsuarioById,
    updateUsuario,deleteUsuario
} from '../../controllers/usuarios';

export default {
    Query : {
        allUsuarios : async (parent,args)=>{
            const response = await readAllUsuarios();
            return response;
        },
        getUsuarioById : async (parent,args)=>{
            const response = await readUsuarioById(args);
            return response;
        },
        getUsuarios : async (parent,args)=>{
            const response = await readSomeUsuarios(args);
            return response;
        }
    },
    Mutation : {
        SignIn : async (parent,args)=>{
            const response = await SignIn(args);
            return response;
        },
        SignUp : async (parent,args)=>{
            const response = await SignUp(args);
            return response;
        },
        updateUsuario : async (parent,args)=>{
            const response = await updateUsuario(args);
            return response;
        },
        deleteUsuario : async (parent,args)=>{
            const response = await deleteUsuario(args);
            return response;
        }
    }
}