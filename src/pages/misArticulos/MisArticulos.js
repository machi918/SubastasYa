import React,{useState,useEffect} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView,RefreshControl} from 'react-native';
import styles from './Styles';
import Articulo from '../../components/Articulo/Articulo';
import {getArticulosPersona} from '../../controllers/SubastasController'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading/Loading';
import Guest from '../../components/Guest/Guest';

export default function MisArticulos({navigation, route}){

    //UseState
    //UseState funcionamiento
    const [refreshing, setRefreshing] = useState(false)
    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
	//UseState logicos
    const [articulos, setArticulos] = useState();
    const [userData, setUserData] = useState();
    const [guest, setGuest] = useState(false);

    useEffect(async() => {
        console.log("ME ACTUALIZO EN MIS ARTICULOS");
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = JSON.parse(jsonValue);
        if(data != undefined || data != null){
            const response = await getArticulosPersona(data.identificador);
            if(response === undefined || jsonValue === undefined){
                console.log('Error, no hay articulos propios');
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

    // const onRefresh = async() => {
    //     setRefreshing(true);
    //     // setReload(false);
    //     const response = await getArticulosPersona(userData.identificador);
    //     setArticulos(response.recordset);
    //     setTimeout(()=> setRefreshing(false), 3000);
    // };

    const onRefresh =() => {
        setReload(!reload);
        setRefreshing(true);
        setTimeout(()=> setRefreshing(false), 3000);
    };

    const handleVerArticulo = (data) =>{
        navigation.navigate('VerArticulo', {descripcionMini: articulos[data].descripcionCatalogo, descComp:articulos[data].descripcionCompleta, precio: articulos[data].precioBase, titulo: articulos[data].titulo, foto:articulos[data].foto, duenio: userData.identificador});
    }

    const handleAgregarArticulo = () =>{
        navigation.navigate('agregarArticulo',{idDuenio: userData.identificador});
    }

    const handleDisponibilidad = (disp)=>{
        if(disp == null){
            return "En revisión"
        }else{
            return disp
        }
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
            showsVerticalScrollIndicator={false}
            refreshControl={
            <RefreshControl
                refreshing = {refreshing}
                onRefresh = {onRefresh}
            />
            }>
            
                {articulos === undefined ? null : articulos.map((key, data )=>{
                    return(
                        <TouchableOpacity key={data} onPress={()=>handleVerArticulo(data)}>
                            <Articulo key={data} id={articulos[data].identificador} titulo={articulos[data].titulo} division={articulos[data].categoria} estado={handleDisponibilidad(articulos[data].disponible)} fecha={articulos[data].fecha} descComp={articulos[data].descripcionCompleta} hora={'-'} minuto={'-'} foto={articulos[data].foto}/>
                        </TouchableOpacity>
                    )})
                } 
            </ScrollView> 
            <TouchableOpacity style={styles.roundedButton} onPress={()=>handleAgregarArticulo()}>
				<Text style={styles.roundedButtonText}>+</Text>
			</TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};