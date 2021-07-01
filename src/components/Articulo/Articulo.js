import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Articulo({hora, minuto, estado,division, titulo, id,foto}){

        //Fecha de la subasta
        // const fechaaux = new Date(hora);
        // const dia = fechaaux.getDate();
        // const mes = fechaaux.getMonth();
        // const year = fechaaux.getFullYear();
        // const hour = parseInt(hora.slice(11,13))-3; // LE AGREGO -3- es INT
        // const hourparse = hour.toString();
        // const min = hora.slice(14,16); //STRING
        // const seg = hora.slice(17,19); //STRING

    function handleEstado(){
        // console.log(hora);
        // console.log(hourparse);
        // console.log(min);
        // console.log(seg);

        if(estado == "si"){
            return "Si"
        }else{
            return "Vendido"
        }
    }

    function handleColorChange(){
        if(estado === "no"){
            return "#256C0C"
        }
        else{
            return '#4FAFE5'
        }
    }

	return (
		<View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{titulo}</Text>
            </View>
            <View style={styles.subHeader}>
                <Image source={{uri: foto}} style={styles.image}></Image>
            </View>
            <View style={{
                backgroundColor:handleColorChange(),
                width:'100%',
                height:'10%',
                alignItems:'center',
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20
            }}>
                <Text style={styles.bottomText}>Disponibilidad: {handleEstado()}  Hora: {hora}:{minuto}</Text>
            </View>

		</View>
	);
};