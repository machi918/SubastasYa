import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage';
import verDetalle from '../../pages/verDetalleArticulo/verDetalle'

export default function VerArticulo({navigation, route}){

    const {titulo,descripcionMini, descComp, precio, division, estado,foto, fecha, ownProduct, duenio} = route.params;

    const [precioFinal, setPrecioFinal] = useState(precio);
    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
    const [textoBoton,setTextoBoton] = useState('');
    const [colorBoton,setColorBoton] = useState('');
    const [userData, setuserData] = useState({});


    useEffect(async() => {
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

    //FALTA EL MANEJO DEL TIEMPO

    function handleColorChange(data){
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

    function handleTextChange(data, auxCat){
        if(data != undefined){
            if(auxCat === duenio){
                return "No puedes ofertar tu producto"
            }
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

    function handleOnPress(){
        if(Object.entries(userData).length === 0){
            // navigation.navigate('InicioSesion');
            navigation.popToTop();
        }else{
            if(textoBoton==='Ofertar'){
                navigation.navigate('Subasta');
                // navigation.navigate('Subasta');
            }
            //TODO, EL MANEJO DE MÁS COSAS
        }
    }

    function handleDetails(){
        navigation.navigate('verDetalle',{descripcion: descComp, titulo: titulo});
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