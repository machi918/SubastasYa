const url = 'http://26.120.118.84:8000/'

//Endpoints de login y registro
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
//Endpoints de Subastas
export const subastas = async () =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'Subastas',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const getItemsSubasta = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'Subasta/Articulos/identificador/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const subastasCategorias = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'Categorias/identificador/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//Me trae todas las pujas de una subasta
export const getPujasSubasta = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'ListaPujos/identificador/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//Crear una puja
export const createPuja = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        console.log("DATA: "+data);
        const response = await fetch(url+'pujos/subasta/'+data.idSubasta+'/duenio/'+data.idDuenioProducto+'/producto/'+data.idProducto+'/cliente/'+data.idCliente+'/importe/'+data.importe+'/comision/'+data.comision+'/hora/'+"'"+data.hora+"'",options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//Update de puja como ganadora
export const updPuja = async (idArticulo) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'FinPujos/identificador/'+idArticulo,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//----------------------------------------------------------------------------------

//Endpoints de Articulos

//Crear articulo
export const addProducto = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url+'PublicarProducto/descripcionCatalogo/'+data.miniDesc+'/descripcionCompleta/'+data.allDesc+'/revisor/'+data.revisor+'/duenio/'+data.duenio+'/titulo/'+data.titulo,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const addPhotoProducto = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(url+'Fotos/producto/'+data.idProducto+'/foto/'+data.url,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const addIteamCatalogo = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(url+'ITCat/producto/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//Endpoints de articulos segun una persona
export const getArticulosSegunID = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    let id = data;
    try {
        const response = await fetch(url+'MisProductos/identificador/'+id,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//Update de articulo como no disponible
export const updArticulo = async (idArticulo) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url+'FinProducto/identificador/'+idArticulo,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//----------------------------------------------------------------------------------


//Endpoints de Medios de Pago

export const getMedioPago = async (data) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    let id = data;
    try {
        const response = await fetch(url+'Tarjetas/identificador/'+data,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const addMedioPago = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url+'CrearTarjetas/nombre/'+data.nombre+'/numero/'+data.numero+'/fechavto/'+data.fecha+'/cliente/'+data.cliente+'/titular/'+data.titular+'/dni/'+data.dni+'/validado/'+null,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//----------------------------------------------------------------------------------


//Endpoints de Estadisticas

export const getEstadisticas = async (idUser) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }

    try {
        const response = await fetch(url + 'Subasta/Metricas/identificador/' + idUser, options)
        return response
    } catch (e) {
        console.error(e)
    }

}

export const getEstadisticasTorta = async (idUser) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }

    try {
        const response = await fetch(url + 'Subasta/Metricas2/identificador/' + idUser, options)
        return response
    } catch (e) {
        console.error(e)
    }

}


//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------


//Endpoints de 

//----------------------------------------------------------------------------------