import {getEstadisticas, getEstadisticasTorta} from '../services/apiRoutes'

export const getEstadisticasUser = async ( idUser )=>
{
    const response = await getEstadisticas(idUser);

    const response2 = await getEstadisticasTorta(idUser)

    if(response.status === 200 && response2.status === 200){
        const json = await response.json();

        const json2 = await response2.json();

        return [json.recordset[0], json2.recordset];
    }else{
        console.log('ERROR en getEstadisticas');
        console.log(response.status);
    }
}