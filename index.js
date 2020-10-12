require('dotenv').config()
import mongoose from 'mongoose'
import app from './app';


const db = process.env.MONGODB
const port = process.env.PORT

const Start = async ()=>{
    try {
        await mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
        await app.listen(port);
        console.log(`Servicios activos: Server port: ${port} database: ${db}`);

    } catch (error) {
        console.log(error)
    }
}

Start();