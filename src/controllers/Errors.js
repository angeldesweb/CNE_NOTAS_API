/**
 * 
 * QUEDA CAMBIAR LA MANERA DE PRESENTACIÓN DE LOS CAMPOS DUPLICADOS AL MOSTRAR EL ERROR
 * 
 */

const formatErrors = (error,otherErrors)=>{
    console.log(error.errors)
    if(!otherErrors) otherErrors = []
    const errors = error.errors;
    let objErrors = []
    if(errors){
        Object.entries(errors).map(error=>{
            const {path,message} = error[1]
            objErrors.push({path,message})
        })
        objErrors = objErrors.concat(otherErrors)
        return objErrors;
    }else if(otherErrors.length){
        return otherErrors
    }
    const unknownError = {}
    const clave = JSON.stringify(error.keyValue).split(':')[0]
    const valor = JSON.stringify(error.keyValue).split(':')[1]
    switch (error.code) {
        case 11000 :
            unknownError.path = "Valor ya existente"
            unknownError.message = `El siguiente dato ya existe en la base de datos. Campo:${clave}, Valor:${valor}`
            break;
        default:
            unknownError.path = "Desconocido"
            unknownError.message = error.message
            break;
    }
    return [unknownError]
}

export {
    formatErrors
}