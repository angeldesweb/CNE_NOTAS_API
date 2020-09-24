import mongoose from 'mongoose'
import app from './app';
import config from './config';

const Start = async ()=>{
    try {
        await mongoose.connect(config.db,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
        await app.listen(config.port);
        console.log(`Servicios activos: Server port: ${config.port} database: ${config.db}`);

    } catch (error) {
        console.log(error)
    }
}

Start();