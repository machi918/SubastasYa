import {login, registro, prueba, addPhotoPersona} from '../services/apiRoutes'

export const Login = async (data)=>
{
    const response = await login(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR');
        console.log(response.status);
    }
}

export const signup = async (data)=>
{
    const response = await registro(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR');
        console.log(response.status);
    }
}

export const addFotoPersona = async (data)=>
{
    const response = await addPhotoPersona(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR');
        console.log(response.status);
    }
}
