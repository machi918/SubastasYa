import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VerArticulo({navigation, route}){

    const {titulo,descripcionMini, descComp, precio, division, estado,foto} = route.params;

    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
    const [textoBoton,setTextoBoton] = useState('No cumples los requisitos minimos');
    const [colorBoton,setColorBoton] = useState('#4D7084');
    const [userData, setuserData] = useState({});

    useEffect(async() => {
            const jsonValue = await AsyncStorage.getItem('userData');
            const data = JSON.parse(jsonValue);
            if(data === undefined){
                console.log('Error en traer datos del usuario');
            }else{
                setuserData(data);
                handleColorChange();
                setBusy(false);
            }
        },[reload])

    const colorData = () => {
        switch(userData.categoria){
            case 'comun':
                setColor('#81421F');
                break;
            case 'especial':
                setColor('#8D008F');
                break;
            case 'plata':
                setColor('#E8E8E8');
                break;
            case 'oro':
                setColor('#ECE303');
                break;
            case 'platino':
                setColor('#62FD84');
                break;
        }
    }


    const handleColorChange = async () => {
        if(userData.categoria == 'oro'){ //HAY QUE CAMBIAR ESTO PORQUE ESTÁ HARDCODEADo
            setColorBoton('#4FAFE5');
            handleTextChange();
        }
    }

    const handleTextChange = () => {
        if(userData.categoria == 'oro'){ //HAY QUE CAMBIAR ESTO PORQUE ESTÁ HARDCODEADo
            setTextoBoton('No cumples los requisitos minimos')
        }
        if(userData.categoria === undefined){ //HAY QUE CAMBIAR ESTO PORQUE ESTÁ HARDCODEADo
            setTextoBoton('Iniciar Sesion')
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