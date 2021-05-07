import React from 'react';
import {  SafeAreaView,  ScrollView,  StatusBar,  StyleSheet,  Text,  useColorScheme,  View,} from 'react-native';
import Informativa from './src/pages/informativaPage/Informativa';
import InicioSesion from './src/pages/inicioSesion/InicioSesion';
import Registro from './src/pages/registro/Registro';

export default function App(){
	const isDarkMode = useColorScheme() === 'dark';


	return (
		<SafeAreaView style={styles.backgroundStyle}>
			{/* <InicioSesion></InicioSesion> */}
			{/* <Registro></Registro> */}
			<Informativa text={'Gracias por registrarte a SubastaYa. Verificaremos tus datos y una vez aprobados, nos contactaremos por mail para que genere su contraseña.'}></Informativa>
			{/* ACA ARRIBA VA EL POST INICIO ERRONEO / REGISTRO / NO VALIDADO */}
			
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	backgroundStyle:{
		flex: 1,
		backgroundColor:'#FFFFFF'
	}
});
