import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VerArticulo({navigation, route}){

    const {titulo,descripcionMini, descComp, precio, division, estado,foto} = route.params;

    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
    const [textoBoton,setTextoBoton] = useState('');
    const [colorBoton,setColorBoton] = useState('');
    const [userData, setuserData] = useState({});

    useEffect(async() => {
            const jsonValue = await AsyncStorage.getItem('userData');
            const data = await JSON.parse(jsonValue);
            const auxText = handleTextChange(data.categoria);
            const auxColor = handleColorChange(data.categoria);
            if(data === undefined){
                console.log('Error en traer datos del usuario');
            }else{
                setuserData(data);
                setTextoBoton(auxText);
                setColorBoton(auxColor);
                setBusy(false);
            }
        },[reload])

        //FALTA TOQUETEAR TODO ACÁ DE CUANDO ME LO HABILITARIA PARA SUBASTA TODO TODO TODO

    function handleColorChange(data){
        switch(data){
            case 'comun':
                if(division==data){
                    return '#4FAFE5'
                }
            case 'especial':
                if(division==data){
                    return '#4FAFE5'
                }
            case 'plata':
                if(division==data){
                    return '#4FAFE5'
                }
            case 'oro':
                if(division==data){
                    return '#4FAFE5'
                }
            case 'platino':
                if(division==data){
                    return '#4FAFE5'
                }
            default:
                return '#4D7084'
        }
    }
    
    function handleTextChange(data){
        switch(data){
            case 'comun':
                if(division==data){
                    return 'Ofertar'
                }
            case 'especial':
                if(division==data){
                    return 'Ofertar'
                }
            case 'plata':
                if(division==data){
                    return 'Ofertar'
                }
            case 'oro':
                if(division==data){
                    return 'Ofertar'
                }
            case 'platino':
                if(division==data){
                    return 'Ofertar'
                }
            default:
                return 'No cumples los requisitos minimos'
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
                <Text style={styles.infoText}>Base ${precio}</Text>
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
            borderRadius: 5}}>
                <Text style={styles.buttonOfferText}>{textoBoton}</Text>
            </TouchableOpacity>
		</SafeAreaView>
	);
};