import {addProducto,addPhotoProducto,addIteamCatalogo} from '../services/apiRoutes'

export const addProduct = async (data)=>
{
    const response = await addProducto(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log(response.status);
    }
}

export const addFotoProducto = async (data)=>
{
    try{
        const response = await addPhotoProducto(data);
        if(response.status === 200){
            const json = await response.json();
            return json;
        }else{
            console.log(response.status);
        }
    }catch (err){
        console.log(err);
    }
}

export const addItemCatalogo = async (data)=>
{
    try{
        const response = await addIteamCatalogo(data);
        if(response.status === 200){
            const json = await response.json();
            return json;
        }else{
            console.log(response.status);
        }
    }catch (err){
        console.log(err);
    }
}


