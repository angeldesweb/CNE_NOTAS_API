import {
    createFicha,readAllFichas,readFichaById,readSomeFichas,updateFicha,deleteFicha
} from '../../controllers/Fichas';

export default {
    Query : {
        allFichas : async (parent,args)=>{
            const response = await readAllFichas();
            return response;
        },
        getFichaById : async (parent,args)=>{
            const response = await readFichaById(args);
            return response;
        },
        getFichas : async (parent,args)=>{
            const response = await readSomeFichas(args);
            return response;
        }
    },
    Mutation : {
        createFicha : async (parent,args)=>{
            const response = await createFicha(args);
            return response;
        },
        updateFicha : async (parent,args)=>{
            const response = await updateFicha(args);
            return response;
        },
        deleteFicha : async (parent,args)=>{
            const response = await deleteFicha(args);
            return response;
        }
    }
}