import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Articulo({fecha, estado,division, titulo}){
	return (
		<View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{titulo}</Text>
            </View>

            <View style={styles.subHeader}>
                <Image source={require('../../assets/Images/rectangulo.png')} style={styles.image}></Image>
            </View>

            <View style={styles.footer}>
                <Text style={styles.bottomText}>Disponibilidad: {estado}  Fecha: {fecha.slice(0,10)}</Text>
            </View>

		</View>
	);
};