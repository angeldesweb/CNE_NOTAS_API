export default `

type Usuario {
    _id:ID!
    tipoCedula:String!
    cedula:String!
    nombre:String!
    password:String!
    email:String!
    createdAt:String!
    updatedAt:String!
    role:String!
}
type UsuarioResponse {
    status:String!
    success:Boolean!
    message:String!
    token:String
    usuario:Usuario
    usuarios:[Usuario]
}

type Query {
    allUsuarios:UsuarioResponse!
    getUsuarioById(_id:ID!):UsuarioResponse!
    getUsuarios(key:String!,value:String!):UsuarioResponse!
}

type Mutation {
    signUp(tipoCedula:String!,cedula:String!,nombre:String!,password:String!,email:String!,role:String!):UsuarioResponse!
    signIn(tipoCedula:String,cedula:String!,password:String!):UsuarioResponse!
    updateUsuario(_id:ID!,tipoCedula:String,cedula:String,nombre:String,password:String,email:String,role:String):UsuarioResponse!
    deleteUsuario(_id:ID!):UsuarioResponse!
}

`