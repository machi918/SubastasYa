import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import getArticulosSubasta from '../../controllers/SubastasController'
import Articulo from '../../components/Articulo/Articulo'

export default function VerSubasta({navigation}){
    const [busy,setBusy] = useState(true);
    const [subastas, setSubastas] = useState();
    const [reload,setReload] = useState(true);

    // useEffect(async() => {
    //     const response = await getSubasta();
    //     if(response === undefined){
    //         console.log('Error, no hay subastas');
    //     }else{
    //         setSubastas(response.recordset);
    //         setBusy(false);
    //     }
    // }, [reload])

    const handleVerArticulo = () =>{
        navigation.navigate('VerArticulo');
        console.log('Me tocaste');
    }

	return (
		<SafeAreaView style={styles.container}>
            {/* {busy ? <Loading/> : null } */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Fecha: XX/YY/ZZZZ</Text>
                <Text style={styles.headerText}>Suabstador: NOMBRE Y APELLIDO</Text>
                <Text style={styles.headerText}>Lugar: CALLE, CIUDAD, REGION</Text>
                <Text style={styles.headerText}>Asistentes: X</Text>
            </View>
            <Text style={styles.mainText}>Catálogo</Text>
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                {/* {subastas === undefined ? null : subastas.map((key, data ) =>{
                    return(
                        <Catalogo key={subastas[data].identificador} titulo={subastas[data].titulo} division={subastas[data].categoria}/>)}
                    )
                }  */}
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleVerArticulo()}>
                    <Articulo></Articulo>
                </TouchableOpacity>
                <Articulo></Articulo>
                <Articulo></Articulo>
                <Articulo></Articulo>
                <Articulo></Articulo>

            </ScrollView> 
            </View>
		</SafeAreaView>
	);
};