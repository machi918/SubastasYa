import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './Styles';

export default function verDetalle({navigation, route}){

    const {descripcion, titulo} = route.params;

	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{titulo}</Text>
            </View>
            <ScrollView style={styles.main}>
                <Text style={styles.mainText}>{descripcion}</Text>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
                <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
		</SafeAreaView>
	);
};