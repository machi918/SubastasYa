import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Articulo({fecha, estado,division, titulo, id,foto}){

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
                <Text style={styles.bottomText}>Disponibilidad: {estado}  Fecha: {fecha.slice(0,10)}</Text>
            </View>

		</View>
	);
};