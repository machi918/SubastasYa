import React, {useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput,ScrollView} from 'react-native';
import styles from './Styles';
import {signup} from '../../controllers/UsersController'


export default function Registro({navigation}){

    //useState
    //UseState logicos
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nombre, setName] = useState('');
    const [documento, setDocumento] = useState('');
    const [apellido, setApellido] = useState('');
    const [domicilio, setDomicilio] = useState('');

    const postRegistro = async ()=>{
        let user = {
            email: mail,
            nombre: nombre,
            apellido: apellido,
            documento: documento,
            tel: telefono,
            direccion: domicilio
        }
        const response = await signup(user);
        navigation.navigate('InformativaRegistro')
    }

	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/Images/Logo.png')} style={styles.logo}></Image>
            </View>
            <ScrollView style={styles.main}>
                <TextInput
                style={styles.input}
                keyboardType={'default'}
                placeholder={'Nombre'}
                autoCompleteType={'name'}
                onChangeText={(text)=>setName(text)}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'default'}
                placeholder={'Apellido'}
                autoCompleteType={'name'}
                onChangeText={(text)=>setApellido(text)}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'email-address'}
                placeholder={'Email'}
                autoCompleteType={'email'}
                onChangeText={(text)=>setMail(text)}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'number-pad'}
                placeholder={'Documento'}
                onChangeText={(text)=>setDocumento(text)}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'phone-pad'}
                placeholder={'Teléfono'}
                autoCompleteType={'tel'}
                onChangeText={(text)=>setTelefono(text)}
                ></TextInput>

                <TextInput
                style={styles.input}
                keyboardType={'default'}
                placeholder={'Domicilio'}
                onChangeText={(text)=>setDomicilio(text)}
                ></TextInput>
            </ScrollView>
            <TouchableOpacity style={styles.buttonWrapper} onPress={() => postRegistro()}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
		</SafeAreaView>
	);
};
