import express from 'express';
import graphQLHTTP from 'express-graphql';
import cors from 'cors';
import schema from './schema';
import {SECRET} from './config';
import bodyParser from 'body-parser';

const app = express();


app.use(cors())

app.use('/graphql',bodyParser.json(),bodyParser.urlencoded({extended:true}),graphQLHTTP((req)=>{
    return {
        graphiql:true,
        schema,
        context:{
            SECRET,
            usuario:req.usuario
        }
    }
}))

app.get('/',(req,res)=>{
    res.status(200).send({messsage:'STILL WORKING!!'});
});

module.exports = app;