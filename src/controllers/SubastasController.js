import {subastas,getItemsSubasta,getArticulosSegunID,subastasCategorias} from '../services/apiRoutes'

export const getSubasta = async ()=>
{
    const response = await subastas();
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR en getSubasta');
        console.log(response.status);
    }
}

export const getArticulosSubasta = async (data)=>
{
    try{
        const response = await getItemsSubasta(data);
        if(response.status === 200){
            const json = await response.json();
            return json;
        }else{
            console.log('ERROR en getArticulosSubasta');
            console.log(response.status);
        }
    }catch (err){
        console.log(err);
    }
}

export const getArticulosPersona = async (data)=>
{
    const response = await getArticulosSegunID(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR en getArticulosPersona');
        console.log(response.status);
    }
}

export const getSubastasCategoria = async (data)=>
{
    const response = await subastasCategorias(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR EN EL GetSubastaCategoria');
        console.log(response.status);
    }
}