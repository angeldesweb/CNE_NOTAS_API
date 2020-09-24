import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {SECRET} from '../config';
import Usuario from '../models/Usuario';



const auth = {
    checkHeaders: async (req,res,next)=>{
        const token = req.headers["x-token"];
        if(token){
            try {
                const {user} = await jwt.verify(token,SECRET)
                console.log('user linea 11', user)
                req.user = user
            } catch (error) {
                console.log(error)
                const newToken = await auth.checkToken(token)
                console.log('Linea 14',newToken)
                req.user = newToken.user
                if(newToken.token){
                    res.set("Access-Control-Expose-Headers","x-token")
                    res.set("x-token",newToken.token)
                }
            }
        }
        next()
    },
    checkToken : async (token)=>{
        console.log('inside checkToken')
        console.log(token)
        let idUser = null
        try {
            const {user} = await jwt.decode(token,SECRET);
            console.log('Linea 28',user)
            idUser = user
        } catch (error) {
            return {}
        }
        const user = await Usuario.finById(idUser);
        const [newToken] = auth.createToken(user);
        return {
            user:user._id,
            token:newToken
        }
    },
    createToken : (usuario)=>{
        const newToken = jwt.sign({usuario:usuario._id},SECRET,{expiresIn:'5d'});
        return [newToken] 
    },
    login : async(args)=>{
        const {cedula,password} = args;
        const usuario = await Usuario.findOne({cedula})
        if(!usuario){
            return {
                errors:[{path:'cedula',message:'Usuario no existe'}]
            }
        }
        const compared = await bcrypt.compare(password,usuario.password);
        if(!compared){
            return{
                errors:[{path:'password',message:'Contraseña inválida'}]
            }
        }
        const [newToken] = await auth.createToken(usuario);
        return {token:newToken,usuario}
    }
}

export default auth