import {subastas} from '../services/apiRoutes'

export const getSubasta = async ()=>
{
    const response = await subastas();
    if(response.status === 200){
        const json = await response.json();
        console.log('ENTRE 2');
        return json;
    }else{
        console.log('ERROR');
        console.log(response.status);
    }
}

// export const signup = async (data)=>
// {
//     const response = await registro(data);
//     if(response.status === 200){
//         const json = await response.json();
//         return json;
//     }else{
//         console.log('ERROR');
//         console.log(response.status);
//     }
// }