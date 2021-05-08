import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Articulo({fecha, estado}){
	return (
		<TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Titulo Loren Ipsum</Text>
            </View>

            <View style={styles.subHeader}>
                <Image source={require('../../assets/Images/rectangulo.png')} style={styles.image}></Image>
            </View>

            <View style={styles.footer}>
                <Text style={styles.bottomText}>Estado: {estado}  Fecha: {fecha}</Text>
            </View>

		</TouchableOpacity>
	);
};