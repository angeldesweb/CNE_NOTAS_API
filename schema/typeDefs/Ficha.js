export default `
scalar Upload

type File {
    id:ID!
    path:String!
    filename:String!
    mimetype:String!
    encoding:String!
}

type Ficha {
    _id:ID!
    codigo:String!
    titulo:String!
    tipoInfo:String!
    postedAt:String!
    createdAt:String!
    resumen:String!
    fuente:String!
    image:String
    author:String!
    postedBy:Usuario
    clasificacion:Clasificacion
}
type FichaResponse {
    status:String!
    success:Boolean!
    message:String!
    ficha:Ficha
    fichas:[Ficha]
}

type Query {
    allFichas:FichaResponse!
    uploads:[File]
    getFichaById(_id:ID!):FichaResponse!
    getFichas(key:String!,value:String!):FichaResponse!
}

type Mutation {
    createFicha(codigo:String!,titulo:String!,tipoInfo:String!,postedAt:String!,createdAt:String,resumen:String!,fuente:String!,image:String,author:String!,postedBy:String!,clasificacion:String!):FichaResponse!
    singleUpload(file:Upload!):File!
    updateFicha(_id:ID,codigo:String,titulo:String,tipoInfo:String,postedAt:String,createdAt:String,resumen:String,fuente:String,image:String,author:String,postedBy:String,clasificacion:String):FichaResponse!
    deleteFicha(_id:ID!):FichaResponse!
}

`