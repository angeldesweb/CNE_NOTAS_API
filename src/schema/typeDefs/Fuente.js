export default `

type Fuente {
    _id:ID!
    tipoDeFuente:String!
    nombre:String!
    description:String
}
type FuenteResponse {
    status:String!
    success:Boolean!
    message:String!
    fuente:Fuente
    fuentes:[Fuente]
}

type Query {
    allFuentes:FuenteResponse!
    getFuenteById(_id:ID!):FuenteResponse!
    getFuentes(key:String!,value:String!):FuenteResponse!
}

type Mutation {
    createFuente(tipoDeFuente:String!,nombre:String!,description:String):FuenteResponse!
    updateFuente(_id:ID!,tipoDeFuente:String,nombre:String,description:String):FuenteResponse!
    deleteFuente(_id:ID!):FuenteResponse!
}

`