import React from 'react';
import {  SafeAreaView,  ScrollView,  StatusBar,  StyleSheet,  Text,  useColorScheme,  View,} from 'react-native';
import Categorias from './src/pages/categorias/Categorias';
import Home from './src/pages/home/Home';
import Informativa from './src/pages/informativaPage/Informativa';
import InicioSesion from './src/pages/inicioSesion/InicioSesion';
import MisArticulos from './src/pages/misArticulos/MisArticulos';
import Registro from './src/pages/registro/Registro';
import Perfil from './src/pages/perfil/Perfil';

export default function App(){
	const isDarkMode = useColorScheme() === 'dark';


	return (
		<SafeAreaView style={styles.backgroundStyle}>
			{/* <InicioSesion></InicioSesion> */}
			{/* <Registro></Registro> */}
			{/* <Informativa text={'Gracias por registrarte a SubastaYa. Verificaremos tus datos y una vez aprobados, nos contactaremos por mail para que genere su contraseña.'}></Informativa> */}
			{/* ACA ARRIBA VA EL POST INICIO ERRONEO / REGISTRO / NO VALIDADO */}
			{/* <Home></Home> */}
			{/* <Categorias></Categorias> */}
			{/* <MisArticulos></MisArticulos> */}
			<Perfil></Perfil>
			
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	backgroundStyle:{
		flex: 1,
		backgroundColor:'#FFFFFF'
	}
});
