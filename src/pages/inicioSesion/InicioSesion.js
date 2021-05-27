import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import {pruebaS, Login} from '../../controllers/UsersController'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InicioSesion({navigation}){

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleStorage = (data)=>{



    }

    const home = async ()=>{
        const user={
            email: mail,
            clave: password
        }
        const response = await Login(user);
        const data = response.recordset[0]
        if(data === undefined){
            console.log('Error, mail o clave incorrectos');
            //manejar el que esté mal el mail / clave
        }else{
            handleStorage(data);
            navigation.navigate('HomeMain')
        }
    };

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
                onChangeText={(text)=>setMail(text)}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'default'}
                secureTextEntry={true}
                placeholder={'Contraseña'}
                onChangeText={(text)=>setPassword(text)}
                ></TextInput>

                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>home()}>
                    <Text style={styles.buttonText}>Iniciar Sesion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('Registro')}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.invitadoButton}>
                    <Text style={styles.buttonText}>Ingresar como invitado</Text>
                </TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};
