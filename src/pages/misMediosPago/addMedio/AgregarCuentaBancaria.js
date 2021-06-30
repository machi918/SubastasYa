import React, { useState }  from 'react';
import {SafeAreaView, View, TouchableOpacity, TextInput, Text, Image} from 'react-native';
import styles from './Styles';




export default function MisMediosPago({navigation}){
    
    const [titular, setTitular] = useState('')
    const [dni, setDni] = useState('')
    const [numeroCuenta, setNumeroCuenta] = useState('')



	return (
		<SafeAreaView style={styles.container}>

            <TextInput
                style={styles.input}
                secureTextEntry={false}
                placeholder={'Nombre del Titular'}
                clearTextOnFocus={true}
                onChangeText={(text) => setTitular(text)}
            />

            <TextInput
                style={styles.input}
                keyboardType={'number-pad'}
                secureTextEntry={false}
                placeholder={'Documento del Titular'}
                clearTextOnFocus={true}
                onChangeText={(text) => setDni(text)}
            />

            <TextInput
                style={styles.input}
                keyboardType={'number-pad'}
                secureTextEntry={false}
                placeholder={'Número de la cuenta'}
                clearTextOnFocus={true}
                onChangeText={(text) => setNumeroCuenta(text)}
            />


            <TouchableOpacity style={styles.buttonWrapper} onPress={()=> {console.log('Cuenta cargada')}}>
                <Text style={styles.buttonText}>Cargar Cuenta</Text>
            </TouchableOpacity>

            

		</SafeAreaView>
	);
};