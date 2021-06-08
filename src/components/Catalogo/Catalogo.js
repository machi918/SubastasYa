import React,{useEffect,useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Catalogo({id,titulo,division,foto, fecha, hora, categoria}){

    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
    const [color,setColor] = useState('');

    useEffect(async() => {
        const response = handleColor(categoria);
        if(response === undefined){
            console.log('Error en el color de la subasta');
        }else{
            setColor(response);
            setBusy(false);
        }
    }, [reload])

    function handleColor(cat){
        switch (cat) {
            case 'arte':
                return 'blue';
            case 'automovilismo':
                return 'red';
            case 'cocina':
                return 'rgb(232, 195, 158)';
            case 'coleccionables':
                return 'black';
            case 'deportes':
                return 'green';
            case 'electro':
                return 'grey';
            case 'libros':
                return 'orange';
            case 'muebles':
                return 'brown';
            case 'tv':
                return 'black';
            case 'misc':
                return 'violet';
            default:
                return 'grey'
        }
    }

	return (
		<View style={styles.container}>
            <View style={{width:'100%',
            height:'30%',
            justifyContent:'center',
            alignItems:'center',
            borderBottomColor:color,
            borderBottomWidth: 3}}>
                <Text style={styles.headerText}> {titulo} </Text>
                <Text style={styles.subHeaderDivision}>División: {division}</Text>
            </View>
            <View style={styles.subHeader}>
                <Image source={{uri: foto}} style={styles.image}></Image>
            </View>
            <View style={styles.footer}>
                <Text style={styles.bottomText}>Fecha: {fecha.slice(0,10)} | Hora: {hora.slice(11,16)}</Text>
            </View>
		</View>
	);
};