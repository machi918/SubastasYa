import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Categoria({navigation, nombre, color,id}){

	return (
		<TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{nombre}</Text>
            </View>

            <View style={styles.main}>
                <View style={{backgroundColor: color, width:'50%'}}></View>
                <Image source={require('../../assets/Images/rectangulo.png')} style={styles.image}></Image>

            </View>

		</TouchableOpacity>
	);
};