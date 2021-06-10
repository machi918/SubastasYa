import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import {getSubastasCategoria} from '../../controllers/SubastasController'
import Catalogo from '../../components/Catalogo/Catalogo'
import Loading from '../../components/Loading/Loading'

export default function subastasCat({navigation, route}){

    const {categoria} = route.params;

    const [busy,setBusy] = useState(true);
    const [subastas, setSubastas] = useState();
    const [reload,setReload] = useState(true);

    useEffect(async() => {
        const response = await getSubastasCategoria(categoria);
        if(response === undefined){
            console.log('Error, no hay subastas o error inesperado.');
        }else{
            setSubastas(response.recordset);
            setBusy(false);
        }
    }, [reload])

    const handleVerSubasta = (data) =>{
        navigation.navigate('VerSubasta',{identificador: subastas[data].identificador, fecha: subastas[data].fecha, hora: subastas[data].hora, estado: subastas[data].estado, subastador: subastas[data].subastador, ubicacion: subastas[data].ubicacion, capacidadAsistentes: subastas[data].capacidadAsistentes, tieneDeposito: subastas[data].tieneDeposito, seguridadPropia: subastas[data].seguridadPropia, categoria: subastas[data].categoria, titulo: subastas[data].titulo});
    }

	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            {/* <View style={styles.header}>
                <Text style={styles.headerText}>Subastas</Text>
            </View> */}
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                {subastas === undefined ? null : subastas.map((key, data ) =>{
                    return(
                        <TouchableOpacity key={data} style={styles.buttonWrapper} onPress={() => handleVerSubasta(data)}>
                            <Catalogo key={data} id={subastas[data].identificador} titulo={subastas[data].titulo} division={subastas[data].categoria} foto={subastas[data].FotoSubasta} fecha={subastas[data].fecha} hora={subastas[data].hora} categoria={subastas[data].division}/>
                        </TouchableOpacity>
                    )})
                }
            </ScrollView> 
            </View>
		</SafeAreaView>
	);
};