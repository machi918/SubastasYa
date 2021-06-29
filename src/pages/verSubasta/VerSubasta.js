import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import {getArticulosSubasta} from '../../controllers/SubastasController'
import Articulo from '../../components/Articulo/Articulo'

export default function VerSubasta({navigation, route}){

    const{identificador, fecha, hora, estado, subastador, ubicacion, capacidadAsistentes, tieneDeposito, seguridadPropia, categoria, titulo} = route.params;

    const [busy,setBusy] = useState(true);
    const [articulos, setArticulos] = useState();
    const [reload,setReload] = useState(true);

    useEffect(async() => {
        const response = await getArticulosSubasta(identificador);
        if(response === undefined){
            console.log('Error, no hay subastas');
        }else{
            setArticulos(response.recordset);
            setBusy(false);
        }
    }, [reload])

    const handleVerArticulo = (data) =>{
        navigation.navigate('VerArticulo', {titulo: articulos[data].titulo, descComp:articulos[data].descripcionCompleta, precio: articulos[data].precioBase, descripcionMini:articulos[data].descripcionCatalogo, foto:articulos[data].foto, division:categoria, fecha: articulos[data].fecha, duenio: articulos[data].duenio});
    }

	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            <View style={styles.header}>
                <Text style={styles.headerText}>Fecha: {fecha.slice(0,10)}</Text>
                <Text style={styles.headerText}>Hora: {hora.slice(11,16)}</Text>
                <Text style={styles.headerText}>Subastador: {subastador}</Text>
                <Text style={styles.headerText}>Lugar: {ubicacion}</Text>
                <Text style={styles.headerText}>Asistentes: {capacidadAsistentes}</Text>
            </View>
            <Text style={styles.mainText}>Catálogo</Text>
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                {articulos === undefined ? null : articulos.map((key, data ) =>{
                    return(
                        <TouchableOpacity key={data} onPress={() => handleVerArticulo(data)}>
                            <Articulo key={articulos[data].identificador} titulo={articulos[data].titulo} division={articulos[data].categoria} estado={articulos[data].disponible} fecha={articulos[data].fecha} descComp={articulos[data].descripcionCompleta} foto={articulos[data].foto}/>
                        </TouchableOpacity>
                    )})
                } 
            </ScrollView>
            </View>
		</SafeAreaView>
	);
};