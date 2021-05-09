import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function EditarPerfil({navigation}){
	return (
		<SafeAreaView style={styles.container}>

            {/* TODO -> LINEA QUE DIVIDE AL HEADER EDITARPERFIl */}

            <View style={styles.subHeader}>
                <Image source={require('../../assets/Images/perfil2.jpg')} style={styles.logo}></Image>
            </View>
            <Text style={styles.subHeaderText}>Sólo rellenar los campos que desea modificar</Text>

            <View style={styles.main}>
 
                <TextInput style={styles.input} placeholder={'Teléfono'}></TextInput>
                <TextInput style={styles.input} placeholder={'Domicilio'}></TextInput>
                <TextInput style={styles.input} placeholder={'Contraseña'}></TextInput>
                <TextInput style={styles.input} placeholder={'Email'}></TextInput>

                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('HomeMain')}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                </TouchableOpacity>


            </View>
		</SafeAreaView>
	);
};