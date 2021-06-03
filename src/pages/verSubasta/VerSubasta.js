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
            console.log(setArticulos);
            setBusy(false);
        }
    }, [reload])

    const handleVerArticulo = (data) =>{
        console.log(articulos[data].descripcionCatalogo);
        navigation.navigate('VerArticulo', {titulo: articulos[data].descripcionCatalogo, descComp:articulos[data].descripcionCompleta, precio: articulos[data].precioBase});
        console.log('Me tocaste');
    }

	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            <View style={styles.header}>
                <Text style={styles.headerText}>Fecha: {fecha.slice(0,10)}</Text>
                <Text style={styles.headerText}>Hora: {hora.slice(11,16)}</Text>
                <Text style={styles.headerText}>Suabstador: {subastador}</Text>
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
                        <TouchableOpacity onPress={() => handleVerArticulo(data)}>
                            <Articulo key={articulos[data].identificador} titulo={articulos[data].descripcionCatalogo} division={articulos[data].categoria} estado={articulos[data].disponible} fecha={articulos[data].fecha} descComp={articulos[data].descripcionCompleta}/>
                        </TouchableOpacity>
                    )})
                } 
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleVerArticulo()}>
                </TouchableOpacity>


            </ScrollView> 
            </View>
		</SafeAreaView>
	);
};