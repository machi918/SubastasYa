import React, {useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import {signup} from '../../controllers/UsersController'


export default function Registro({navigation}){

    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [nombre, setName] = useState('');
    const [documento, setDocumento] = useState('');
    const [apellido, setApellido] = useState('');
    const [domicilio, setDomicilio] = useState('');

    const postRegistro = async ()=>{
        // let user = {
        //     usuario: mail,
        //     clave: 'clave de prueba',
        //     status: 0
        // }
        //Lo de arriba hay que modificarlos cuando fran tire la data
        let user = {
            usuario: mail,
            nombre: nombre,
            apellido: apellido,
            documento: documento,
            telefono: telefono,
            domicilio: domicilio
        }
        const response = await signup(user);
        navigation.navigate('Informativa')
    }

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
                secureTextEntry={true}
                placeholder={'Domicilio'}
                onChangeText={(text)=>setDomicilio(text)}
                ></TextInput>

                <TouchableOpacity style={styles.buttonWrapper} onPress={() => postRegistro()}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                </TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};
