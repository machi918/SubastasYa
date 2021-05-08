import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';

export default function MisArticulos(){
	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Perfil</Text>
            </View>

            <View style={styles.subHeader}>
                <Image source={require('../../assets/Images/perfil2.jpg')} style={styles.logo}></Image>
                <Text style={styles.subHeaderName}>NOMBRE APELLIDO</Text>
                <Text style={styles.subHeaderDivision}>Division X</Text>
            </View>

            <View style={styles.main}>

                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Editar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Mis Medios de Pago</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Mis Estadísticas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapperLogOut}>
                    <Text style={styles.buttonTextLogOut}>Cerrar Sesión</Text>
                </TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};