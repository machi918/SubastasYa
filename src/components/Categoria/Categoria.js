import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Categoria({navigation, nombre, color,id,foto, icono}){
	return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>{nombre}</Text>
        </View>
        <View style={styles.main}>
            <Icon name={icono} style={styles.icono} color={color}/>
        </View>
    </View>
	);
};