import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import verDetalle from '../../pages/verDetalleArticulo/verDetalle'

export default function VerArticulo({navigation, route}){

    //Route Params
    const {titulo,descripcionMini, descComp, precio, division, estado,foto, fecha, ownProduct, duenio,id, idSubasta,horaSubasta,minSubasta} = route.params;

    //Fecha de la subasta
    const fechaaux = new Date(fecha);
    const diaSub = fechaaux.getDate();
    const mesSub = fechaaux.getMonth();
    const yearSub = fechaaux.getFullYear();
    
    //Fecha de hoy
    const fechaHoy = new Date();
    const dia = fechaHoy.getDate();
    const mes = fechaHoy.getMonth();
    const year = fechaHoy.getFullYear();
    const hour = fechaHoy.getHours();
    const min = fechaHoy.getMinutes();
    const seg = fechaHoy.getSeconds();

    //Horario de la subasta
    const hourAUX = horaSubasta;
    const minAUX = minSubasta;

    //UseState
    //UseState funcionamiento
    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
    //UseState logicos
    const [textoBoton,setTextoBoton] = useState('');
    const [colorBoton,setColorBoton] = useState('');
    const [userData, setuserData] = useState({});
    const [precioFinal, setPrecioFinal] = useState(precio);

    useEffect(async() => {
        console.log("FECHA DE SUBASTA: "+fechaaux);
        console.log("HORA SUBASTA: "+ hourAUX);
        console.log("MIN SUBASTA: "+ minAUX);
        console.log("FECHA ACTUAL: "+fechaHoy);
        console.log("HORA ACTUAL: "+ hour);
        console.log("MIN ACTUAL: "+ min);
        console.log(hourAUX == parseInt(hour));
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = await JSON.parse(jsonValue);
        if(data === undefined || data === null){
            setPrecioFinal('XXXXX');
            console.log('Error en traer datos del usuario');
            setTextoBoton('Iniciar Sesion');
            setColorBoton('#4D7084');
            setBusy(false);
        }else{
            const auxID = data.identificador
            const auxCat = data.categoria;
            const auxText = handleTextChange(auxCat, auxID);
            const auxColor = handleColorChange(auxCat);
            setuserData(data);
            setTextoBoton(auxText);
            setColorBoton(auxColor);
            setBusy(false);
        }
    },[reload])

    // useFocusEffect(
	// 	React.useCallback(() => {
    //         let isActive = true;
    //         // alert("WINDOW FOCUSED");
    //         const resp = getDatosUsuario();
    //         return () => {
    //             isActive = false;
    //             // alert("WINDOW UNFOCUSED");

    //         };
    // }, []));

    // const getDatosUsuario = async ()=>{
    //     const jsonValue = await AsyncStorage.getItem('userData');
    //     const data = await JSON.parse(jsonValue);
    //     if(data === undefined || data === null){
    //         setPrecioFinal('XXXXX');
    //         console.log('Error en traer datos del usuario');
    //         setTextoBoton('Iniciar Sesion');
    //         setColorBoton('#4D7084');
    //         setBusy(false);
    //     }else{
    //         const auxID = data.identificador
    //         const auxCat = data.categoria;
    //         const auxText = handleTextChange(auxCat, auxID);
    //         const auxColor = handleColorChange(auxCat);
    //         setuserData(data);
    //         setTextoBoton(auxText);
    //         setColorBoton(auxColor);
    //         setBusy(false);
    // }};

    //FALTA EL MANEJO DEL TIEMPO

    function handleColorChange(data){
        if(estado == "no"){
            return "#256C0C"
        }
        if((diaSub == dia) && (mesSub == mes) && (yearSub==year)){
            console.log("DESDE VERARTICULO, LA SUBASTA ES HOY");
            if((hour>hourAUX) || ((hour==hourAUX) && (min>minAUX+10))){
                return "#4D7084"
            }
            if(data != undefined || data != null){
                if(data === "platino" || division === data){
                    return "#4FAFE5"
                }else if(data === "oro" && (division==="comun" ||division ==="especial" ||division ==="plata")){
                    return "#4FAFE5"
                }else if(data === "plata" && (division==="comun" ||division ==="especial")){
                    return "#4FAFE5"
                }else if(data === "especial" && (division==="comun")){
                    return "#4FAFE5"
                }
                else{
                    return "#4D7084"
                }
            }else{
                console.log("ERROR EN HANDLECOLORCHANGE");
            }
        }
        if(fechaaux > fechaHoy){
            return "#4D7084"
        }
    }

    function handleTextChange(data, auxCat){
        return "Ofertar"
        if(estado== "no"){
            return "Objeto vendido"
        }
        if(auxCat === duenio){
            return "No puedes ofertar tu producto"
        }if((diaSub == dia) && (mesSub == mes) && (yearSub==year)){
            if((hour>hourAUX) || ((hour==hourAUX) && (min>minAUX+10))){
                return "Subasta finalizada"
            }
            if(data != undefined){
                if(data === "platino" || division === data){
                    return "Ofertar"
                }else if(data === "oro" && (division==="comun" ||division ==="especial" ||division ==="plata")){
                    return "Ofertar"
                }else if(data === "plata" && (division==="comun" ||division ==="especial")){
                    return "Ofertar"
                }else if(data === "especial" && (division==="comun")){
                    return "Ofertar"
                }
                else{
                    return "No cumples con la categoria mínima"
                }
            }else{
                console.log("ERROR EN HANDLETEXTCHANGE");
            }
        }
        if(fechaaux > fechaHoy){
            return "Subasta no iniciada"
        }else if(fechaaux < fechaHoy){
            return "Subasta finalizada"
        }
    }

    function handleOnPress(){
        if(Object.entries(userData).length === 0){
            // navigation.navigate('InicioSesion');
            navigation.popToTop();
        }else{
            if(textoBoton==='Ofertar'){
                navigation.navigate('Subasta', {postor:userData.identificador, foto:foto, titulo:titulo,precio:precio, duenio:duenio, division:division, idProducto:id, idSubasta:idSubasta, fecha:fecha, horaSubasta: hourAUX, minSubasta: minAUX});
            }
            if(textoBoton==="Objeto vendido"){
                navigation.goBack();
            }
            if(textoBoton==="Subasta no iniciada"){
                navigation.goBack();
            }
            if(textoBoton==="Subasta finalizada"){
                navigation.goBack();
            }
            //TODO, EL MANEJO DE MÁS COSAS
        }
    }

    function handleDetails(){
        navigation.navigate('verDetalle',{descripcion: descComp, titulo: titulo});
    }

    function handleEstado(){
        if(estado == "no"){

        }
    }

	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            <View style={styles.header}>
                <Image source={{uri:foto}} style={styles.image}></Image>
            </View>
            <View style={styles.subheader}>
                <Text style={styles.subheaderText}>{titulo}</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>VENDEDOR</Text>
                <Text style={styles.infoText}>Base ${precioFinal}</Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.mainText}>{descripcionMini}</Text>
            </View>
            <TouchableOpacity style={styles.buttonDetail} onPress={()=>handleDetails()}>
                <Text style={styles.buttonDetailText}>Detalles</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOffer, {backgroundColor: colorBoton ,
            borderColor: '#4CACE2',
            borderWidth: 2,
            width:'90%',
            height:'7%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5}}
            onPress={()=>handleOnPress()}>
                <Text style={styles.buttonOfferText}>{textoBoton}</Text>
            </TouchableOpacity>
		</SafeAreaView>
	);
};