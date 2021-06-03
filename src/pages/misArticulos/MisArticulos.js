import React,{useState,useEffect} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Articulo from '../../components/Articulo/Articulo';
import {getArticulosPersona} from '../../controllers/SubastasController'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading/Loading';

export default function MisArticulos({navigation, route}){

    const [busy,setBusy] = useState(true);
    const [articulos, setArticulos] = useState();
    const [userData, setUserData] = useState();
    const [reload,setReload] = useState(true);

    useEffect(async() => {
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = JSON.parse(jsonValue);
        const response = await getArticulosPersona(data.identificador);
        if(response === undefined || jsonValue === undefined){
            console.log('Error, no hay subastas');
        }else{
            setArticulos(response.recordset);
            setUserData(data);
            setBusy(false);
        }
    }, [reload])

    // const handleVerArticulos = (data) =>{
    //     navigation.navigate('VerSubasta',{identificador: articulos[data].identificador, fecha: articulos[data].fecha, hora: articulos[data].hora, estado: articulos[data].estado, subastador: subastas[data].subastador, ubicacion: subastas[data].ubicacion, capacidadAsistentes: subastas[data].capacidadAsistentes, tieneDeposito: subastas[data].tieneDeposito, seguridadPropia: subastas[data].seguridadPropia, categoria: subastas[data].categoria, titulo: subastas[data].titulo});
    // }

    const handleVerArticulo = (data) =>{
        console.log(articulos[data].descripcionCatalogo);
        navigation.navigate('VerArticulo', {titulo: articulos[data].descripcionCatalogo, descComp:articulos[data].descripcionCompleta, precio: articulos[data].precioBase});
        console.log('Me tocaste');
    }


	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            <View style={styles.header}>
                <Text style={styles.headerText}>Mis Artículos</Text>
            </View>
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                {articulos === undefined ? null : articulos.map((key, data )=>{
                    return(
                        <TouchableOpacity key={data} onPress={()=>handleVerArticulo(data)}>
                            <Articulo key={data} id={articulos[data].identificador} titulo={articulos[data].descripcionCatalogo} division={articulos[data].categoria} estado={articulos[data].disponible} fecha={articulos[data].fecha} descComp={articulos[data].descripcionCompleta}/>
                        </TouchableOpacity>
                    )})
                } 
            </ScrollView> 
                


            </View>
		</SafeAreaView>
	);
};