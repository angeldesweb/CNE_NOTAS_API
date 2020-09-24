export default `

type Clasificacion {
    _id:ID!
    subClass:String!
    clasificacion:String!
}
type ClasificacionResponse {
    status:String!
    success:Boolean!
    message:String!
    clasificacion:Clasificacion
    clasificaciones:[Clasificacion]
}

type Query {
    allClasificaciones:ClasificacionResponse!
    getClasificacionById(_id:ID!):ClasificacionResponse!
    getClasificaciones(key:String!,value:String!):ClasificacionResponse!
}

type Mutation {
    createClasificacion(subClass:String!,clasificacion:String!):ClasificacionResponse!
    updateClasificacion(_id:ID!,subClass:String,clasificacion:String):ClasificacionResponse!
    deleteClasificacion(_id:ID!):ClasificacionResponse!
}

`