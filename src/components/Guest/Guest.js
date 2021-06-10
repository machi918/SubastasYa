import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';


export default function Guest({navigation}){
	return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Para utilizar todas las funcionalidades de SubastasYa, debe Iniciar Sesion o Registrarse.</Text>
                </View>
                <View style={styles.main}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
	);
};