const url = 'http://26.120.118.84:8000/'

export const registro = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url+'CrearUsuario/nombre/'+data.nombre+'/apellido/'+data.apellido+'/email/'+data.email+'/documento/'+data.documento+'/tel/'+data.tel+'/direccion/'+data.direccion,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const login = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'IniciarSesion/email/'+data.email+'/clave/'+data.clave,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}
//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------