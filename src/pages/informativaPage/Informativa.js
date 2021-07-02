import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Informativa({route, navigation}){

    //Props
    const {text} = route.params;
    
	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/Images/Logo.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.main}>
                <View style={styles.contentWrapper}>
                    <Text style={styles.text}>{text}</Text>
                    <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('InicioSesion')}>
                        <Text style={styles.buttonText}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
            </View>
		</SafeAreaView>
	);
};
