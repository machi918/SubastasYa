const url = 'http://26.120.118.84:8000/'

export const login = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url+'login',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const prueba = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(url+'api/usuario/list',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}