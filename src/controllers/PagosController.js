import {getMedioPago} from '../services/apiRoutes'

export const getMediosPago = async (data)=>
{
    const response = await getMedioPago(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('ERROR en addProduct');
        console.log(response.status);
    }
}
