import {
    createFuente,readAllFuentes,readFuenteById,readSomeFuentes,updateFuente,deleteFuente
} from '../../controllers/Fuentes';

export default {
    Query : {
        allFuentes : async (parent,args)=>{
            const response = await readAllFuentes();
            return response;
        },
        getFuenteById : async (parent,args)=>{
            const response = await readFuenteById(args);
            return response;
        },
        getFuentes : async (parent,args)=>{
            const response = await readSomeFuentes(args);
            return response;
        }
    },
    Mutation : {
        createFuente : async (parent,args)=>{
            const response = await createFuente(args);
            return response;
        },
        updateFuente : async (parent,args)=>{
            const response = await updateFuente(args);
            return response;
        },
        deleteFuente : async (parent,args)=>{
            const response = await deleteFuente(args);
            return response;
        }
    }
}