import React,{useState,useEffect} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Articulo from '../../components/Articulo/Articulo';
import {getArticulosPersona} from '../../controllers/SubastasController'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading/Loading';
import Guest from '../../components/Guest/Guest';

export default function MisArticulos({navigation, route}){

    const [busy,setBusy] = useState(true);
    const [articulos, setArticulos] = useState();
    const [userData, setUserData] = useState();
    const [reload,setReload] = useState(true);
    const [guest, setGuest] = useState(false);

    useEffect(async() => {
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = JSON.parse(jsonValue);
        if(data != undefined || data != null){
            const response = await getArticulosPersona(data.identificador);
            if(response === undefined || jsonValue === undefined){
                console.log('Error, no hay subastas');
            }else{
                setArticulos(response.recordset);
                setUserData(data);
                setBusy(false);
            }
        }else{
            setGuest(true);
            setBusy(false);
        }
        
    }, [reload])

    const handleVerArticulo = (data) =>{
        navigation.navigate('VerArticulo', {descripcionMini: articulos[data].descripcionCatalogo, descComp:articulos[data].descripcionCompleta, precio: articulos[data].precioBase, titulo: articulos[data].titulo, foto:articulos[data].foto});
    }

	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            {guest ? <Guest/> : null }
            <View style={styles.header}>
                <Text style={styles.headerText}>Mis Artículos</Text>
            </View>
            <View style={styles.main} pointerEvents={guest ? 'none' : 'auto'}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                {articulos === undefined ? null : articulos.map((key, data )=>{
                    return(
                        <TouchableOpacity key={data} onPress={()=>handleVerArticulo(data)}>
                            <Articulo key={data} id={articulos[data].identificador} titulo={articulos[data].titulo} division={articulos[data].categoria} estado={articulos[data].disponible} fecha={articulos[data].fecha} descComp={articulos[data].descripcionCompleta} foto={articulos[data].foto}/>
                        </TouchableOpacity>
                    )})
                } 
            </ScrollView> 
            <TouchableOpacity style={styles.roundedButton}>
				<Text style={styles.roundedButtonText}>+</Text>
			</TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};