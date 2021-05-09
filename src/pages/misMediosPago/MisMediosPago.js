import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function MisMediosPago({navigation}){
	return (
		<SafeAreaView style={styles.container}>

            {/* TODO -> LINEA QUE DIVIDE AL HEADER EDITARPERFIl */}
            <Text style={styles.subHeaderText}>Mis medios de pago</Text>
		</SafeAreaView>
	);
};