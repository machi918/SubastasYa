import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VerArticulo({navigation, route}){

    const {titulo,descripcionMini, descComp, precio, division, estado,foto} = route.params;

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
                const auxCat = data.categoria;
                const auxText = handleTextChange(auxCat);
                const auxColor = handleColorChange(auxCat);
                setuserData(data);
                setTextoBoton(auxText);
                setColorBoton(auxColor);
                setBusy(false);
            }
        },[reload])

    //FALTA TOQUETEAR TODO ACÁ DE CUANDO ME LO HABILITARIA PARA SUBASTA TODO TODO TODO

    function handleColorChange(data){
        if(data != undefined || data != null){
        switch(data){
            case 'comun':
                return '#4FAFE5'
            case 'especial':
                return '#4FAFE5'
            case 'plata':
                return '#4FAFE5'
            case 'oro':
                return '#4FAFE5'
                
            case 'platino':
                return '#4FAFE5'
                
            default:
                return '#4D7084'
        }
        }
    }
    
    function handleTextChange(data){
        if(data != undefined){
        switch(data){
            case 'comun':
                return 'Ofertar'
            case 'especial':
                    return 'Ofertar'
            case 'plata':
                    return 'Ofertar'
            case 'oro':
                    return 'Ofertar'
            case 'platino':
                    return 'Ofertar'
            default:
                return 'No cumples los requisitos minimos'
        }
        }
    }

    function handleOnPress(){
        if(Object.entries(userData).length === 0){
            navigation.navigate('InicioSesion');
        }else{
            if(textoBoton.localeCompare('Ofertar')){
                // navigation.navigate('Subasta');
            }
            //TODO, EL MANEJO DE MÁS COSAS
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
            <TouchableOpacity style={styles.buttonDetail}>
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