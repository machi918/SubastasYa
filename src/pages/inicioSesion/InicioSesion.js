import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import {Login} from '../../controllers/UsersController'
import {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading/Loading'

export default function InicioSesion({navigation}){

    //UseState
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [busy,setBusy] = useState(true);

    useEffect(async () => {
        const data = await handleGetStorage();
        if(data != undefined || data != null){
            setBusy(false)
            navigation.navigate('HomeMain');
        }else{
            console.log("Datos de usuario no encontrados");
            setBusy(false)
        }
    }, [])

    const handleSetStorage = async (data) => {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('userData', jsonValue)
        } catch (e) {
            console.log('Error con la carga al AsyncStorage');
        }
    }

    const handleGetStorage = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userData')
            const data = JSON.parse(jsonValue);
            return jsonValue != null ? data : null;
        } catch(e) {
            console.log('Error con la descarga del AsyncStorage');
        }
    }

    const home = async ()=>{
        const user={
            email: mail,
            clave: password
        }
        if(user.email === '' || user.clave === ''){
            navigation.navigate('InformativaBadLogin');
            return
        }
        const response = await Login(user);
        const data = response.recordset[0]
        if(data === undefined){
            console.log('Error, mail o clave incorrectos');
            navigation.navigate('InformativaBadLogin');
        }else{
            await handleSetStorage(data);
            const userData = await handleGetStorage();
            navigation.navigate('HomeMain');
        }
    };


    const handleGuestUser = ()=>{
        navigation.navigate('HomeMain')
    }

	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            <View style={styles.header}>
                <Image source={require('../../assets/Images/Logo.png')} style={styles.logo}></Image>
            </View>
            <View style={styles.main}>

                <TextInput
                style={styles.input}
                keyboardType={'email-address'}
                placeholder={'Email'}
                clearButtonMode={'always'}                
                autoCompleteType={'email'}
                onChangeText={(text)=>setMail(text)}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'default'}
                secureTextEntry={true}
                placeholder={'Contraseña'}
                clearTextOnFocus={true}
                onChangeText={(text)=>setPassword(text)}
                ></TextInput>

                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>home()}>
                    <Text style={styles.buttonText}>Iniciar Sesion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate('Registro')}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.invitadoButton} onPress={()=>handleGuestUser()}>
                    <Text style={styles.buttonText}>Ingresar como invitado</Text>
                </TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};
