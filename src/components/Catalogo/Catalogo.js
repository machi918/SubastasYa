import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Catalogo({id,titulo,division,foto, fecha, hora}){
	return (
		<View style={styles.container}>
            <View style={styles.header}>
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