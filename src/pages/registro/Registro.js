import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function Registro(){
	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/Images/Logo.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.main}>

                {/* TODO: REQUIERED FIELD */}
                <TextInput
                style={styles.input}
                keyboardType={'default'}
                placeholder={'Nombre'}
                autoCompleteType={'name'}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'default'}
                placeholder={'Apellido'}
                autoCompleteType={'name'}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'email-address'}
                placeholder={'Email'}
                autoCompleteType={'email'}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'number-pad'}
                placeholder={'Documento'}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'phone-pad'}
                placeholder={'Teléfono'}
                autoCompleteType={'tel'}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'default'}
                secureTextEntry={true}
                placeholder={'Domicilio'}
                ></TextInput>

                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};
