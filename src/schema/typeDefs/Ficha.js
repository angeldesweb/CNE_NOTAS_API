export default `

type Ficha {
    _id:ID!
    codigo:String!
    titulo:String!
    tipoInfo:String!
    postedAt:Int!
    createdAt:Int!
    resumen:String!
    fuente:Fuente!
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
    getFichaById(_id:ID!):FichaResponse!
    getFichas(key:String!,value:String!):FichaResponse!
}

type Mutation {
    createFicha(codigo:String!,titulo:String!,tipoInfo:String!,postedAt:Int!,createdAt:String,resumen:String!,fuente:String!,image:String,author:String!,postedBy:String!,clasificacion:String!):FichaResponse!
    updateFicha(_id:ID,codigo:String,titulo:String,tipoInfo:String,postedAt:Int,createdAt:Int,resumen:String,fuente:String,image:String,author:String,postedBy:String,clasificacion:String):FichaResponse!
    deleteFicha(_id:ID!):FichaResponse!
}

`