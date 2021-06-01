import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Catalogo({id,titulo,division}){
	return (
		<View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> {titulo} </Text>
                <Text style={styles.subHeaderDivision}>Division {division}</Text>
            </View>

            <View style={styles.subHeader}>
                <Image source={require('../../assets/Images/rectangulo.png')} style={styles.image}></Image>
            </View>

            <View style={styles.footer}>
                <Text style={styles.bottomText}>Fecha: XX/YY/ZZ - II:JJ</Text>
            </View>

		</View>
	);
};