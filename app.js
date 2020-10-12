require('dotenv').config()
import express from 'express';
import graphQLHTTP from 'express-graphql';
import cors from 'cors';
import schema from './schema';
import bodyParser from 'body-parser';
import { graphqlUploadExpress } from 'graphql-upload';

const secret = process.env.SECRET_TOKEN

const app = express();

app.use(cors())

app.use(express.static('uploads'))

app.use('/graphql',cors(),bodyParser.json(),bodyParser.urlencoded({extended:true}),graphqlUploadExpress(),graphQLHTTP((req)=>{
    return {
        graphiql:true,
        schema,
        context:{
            secret,
            usuario:req.usuario
        }
    }
}))

app.get('/',(req,res)=>{
    res.status(200).send({messsage:'STILL WORKING!!'});
});

module.exports = app;