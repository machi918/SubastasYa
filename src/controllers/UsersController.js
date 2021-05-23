import {login, registro, prueba} from '../services/apiRoutes'

//Prueba es para testear
export const pruebaS = async ()=>
{
    const response = await prueba();
    
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR');
        console.log(response.status);
    }
}

