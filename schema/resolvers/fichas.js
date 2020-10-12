import fs from 'fs';
import mkdirp from 'mkdirp'
import shortid from 'shortid'
import {
    createFicha,readAllFichas,readFichaById,readSomeFichas,updateFicha,deleteFicha
} from '../../controllers/Fichas';

//Carpeta local de imágenes
const uploadDir = './uploads'

mkdirp.sync(uploadDir)

//Almacenamiento local
const storeFS = async ({ stream , filename })=>{
    const id = shortid.generate();
    const link = `${uploadDir}/${id}-${filename}`;
    const path = `${id}-${filename}`;
    stream.on('error',error=>{
        if(stream.truncated) fs.unlinkSync(link);
        throw new Error(error)
    })
    try {
        await stream.pipe(fs.createWriteStream(link));
    } catch (error) {
        return error
    }
    return { id , path }
}

//Procesador del UPLOAD
const processUpload = async upload => {
    const { filename , mimetype , encoding , createReadStream} = await upload.file
    const stream = await createReadStream()
    
    const { id , path } = await storeFS({ stream , filename })

    return ({ id , path , filename , mimetype , encoding })
}

export default {
    Query : {
        uploads : async(parent,args)=>{
            const images = await fs.readFile()
            return images
        },
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
        singleUpload: async (parent, { file } ) => {
            const { id , path , filename , mimetype , encoding } = await processUpload(file.file)
            return {id,path,filename,mimetype,encoding}
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