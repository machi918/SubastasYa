import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView,RefreshControl} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import {getArticulosSubasta} from '../../controllers/SubastasController'
import Articulo from '../../components/Articulo/Articulo'

export default function VerSubasta({navigation, route}){

    //El refresh control hace el famoso "Scroll to update"

    //Route Params
    const{identificador, fecha, hora, estado, subastador, ubicacion, capacidadAsistentes, tieneDeposito, seguridadPropia, categoria, titulo} = route.params;

    var hourAUX = parseInt(hora.slice(11,13))-3;
    var minAUX = parseInt(hora.slice(14,16));
    var auxiliarHORA = hourAUX;
    var auxiliarMIN = minAUX;

    //UseState
    //UseState funcionamiento
    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
    //UseState logicos
    const [articulos, setArticulos] = useState();

    //Fecha de la subasta
    const fechaaux = new Date(fecha);
    const dia = fechaaux.getDate();
    const mes = fechaaux.getMonth();
    const year = fechaaux.getFullYear();
    
    //Horario de la subasta
    const horaaux = new Date(hora);
    const hour = horaaux.getHours();
    const min = horaaux.getMinutes();
    const seg = horaaux.getSeconds();

    useEffect(async() => {
        const response = await getArticulosSubasta(identificador);
        if(response === undefined){
            console.log('Error, no hay subastas');
        }else{
            setArticulos(response.recordset);
            setBusy(false);
        }
    }, [reload]);

    const onRefresh =() => {
        setReload(!reload);
        setRefreshing(true);
        setTimeout(()=> setRefreshing(false), 3000);
    };

    const handleVerArticulo = (data) =>{
        navigation.navigate('VerArticulo', {titulo: articulos[data].titulo, descComp:articulos[data].descripcionCompleta, precio: articulos[data].precioBase, descripcionMini:articulos[data].descripcionCatalogo, foto:articulos[data].foto, division:categoria, fecha: fecha, duenio: articulos[data].duenio, id:articulos[data].identificador, estado: articulos[data].disponible, idSubasta:identificador, horaSubasta: articulos[data].horaSubasta, minSubasta: articulos[data].minSubasta});
    };

	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            <View style={styles.header}>
                <Text style={styles.headerText}>Fecha: {dia}-{mes+1}-{year}</Text>
                <Text style={styles.headerText}>Hora: {horaaux.toString().slice(16,21)}</Text>
                <Text style={styles.headerText}>Subastador: {subastador}</Text>
                <Text style={styles.headerText}>Lugar: {ubicacion}</Text>
                <Text style={styles.headerText}>Asistentes: {capacidadAsistentes}</Text>
            </View>
            <Text style={styles.mainText}>Catálogo</Text>
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing = {refreshing}
                    onRefresh = {onRefresh}
                />
            }>
                {articulos === undefined ? null : articulos.map((key, data) =>{
                    auxiliarHORA = hourAUX;
                    auxiliarMIN = minAUX;

                    articulos[data]["horaSubasta"] = auxiliarHORA;
                    articulos[data]["minSubasta"] = auxiliarMIN;
                    if((minAUX+10)>=60){
                        hourAUX += 1;
                        minAUX = 0;
                    }else{
                        minAUX += 10;
                    }
                    return(
                        <TouchableOpacity key={data} onPress={() => handleVerArticulo(data)}>
                            <Articulo key={articulos[data].identificador} titulo={articulos[data].titulo} division={articulos[data].categoria} estado={articulos[data].disponible} hora={auxiliarHORA} minuto={auxiliarMIN} descComp={articulos[data].descripcionCompleta} foto={articulos[data].foto}/>
                        </TouchableOpacity>
                    )})
                } 
            </ScrollView>
            </View>
		</SafeAreaView>
	);
};