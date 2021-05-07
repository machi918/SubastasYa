import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function InicioSesion(){
	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/Images/Logo.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.main}>

                <TextInput
                style={styles.input}
                keyboardType={'email-address'}
                placeholder={'Email'}
                autoCompleteType={'email'}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'default'}
                secureTextEntry={true}
                placeholder={'Contraseña'}
                ></TextInput>

                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Iniciar Sesion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.invitadoButton}>
                    <Text style={styles.buttonText}>Ingresar como invitado</Text>
                </TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};
