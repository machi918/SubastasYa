import {subastas,articulosSubasta} from '../services/apiRoutes'

export const getSubasta = async ()=>
{
    const response = await subastas();
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR EN EL GETSUBASTA');
        console.log(response.status);
    }
}

export const getArticulosSubasta = async (data)=>
{
    const response = await articulosSubasta(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR');
        console.log(response.status);
    }
}

export const getArticulo = async (data)=>
{
    const response = await articulosSubasta(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR');
        console.log(response.status);
    }
}