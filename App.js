import 'react-native-gesture-handler';

import React from 'react';
import {  SafeAreaView,  ScrollView,  StatusBar,  StyleSheet,  Text,  useColorScheme,  View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Categorias from './src/pages/categorias/Categorias';
import Home from './src/pages/home/Home';
import Informativa from './src/pages/informativaPage/Informativa';
import InicioSesion from './src/pages/inicioSesion/InicioSesion';
import MisArticulos from './src/pages/misArticulos/MisArticulos';
import Registro from './src/pages/registro/Registro';
import Perfil from './src/pages/perfil/Perfil';
import VerArticulo from './src/pages/verArticulo/VerArticulo';
import VerSubasta from './src/pages/verSubasta/VerSubasta';
import Subasta from './src/pages/subasta/Subasta';
import EditarPerfil from './src/pages/editarPerfil/EditarPerfil';
import MisMediosPago from './src/pages/misMediosPago/MisMediosPago';
import MisEstadisticas from './src/pages/misEstadisticas/MisEstadisticas';

export default function App(){
	const isDarkMode = useColorScheme() === 'dark';
	const Stack = createStackNavigator();
	const Tab = createBottomTabNavigator();

	const mainAct = ()=>{
		return(
			<Tab.Navigator>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Categorias" component={Categorias}/>
				<Tab.Screen name="MisArticulos" component={MisArticulos}/>
				<Tab.Screen name="Perfil" component={Perfil}/>
			</Tab.Navigator>	
		)
	}

	const postRegistro = ()=>{
		return(
			<Informativa text={'Gracias por registrarte a SubastaYa. Verificaremos tus datos y una vez aprobados, nos contactaremos por mail para que genere su contraseña.'}></Informativa>
		)
	}

	const subastaAct = ()=>{
		return(
			<Stack.Navigator>
				<Stack.Screen name="VerSubasta" component={VerSubasta}/>
				<Stack.Screen name="VerArticulo" component={VerArticulo}/>
				<Stack.Screen name="Subasta" component={Subasta}/>
			</Stack.Navigator>
		)
	}

	return (
		<NavigationContainer>
		<SafeAreaView style={styles.backgroundStyle}>
			<Stack.Navigator>
				{/* ----PRUEBAS DIRECTAS--- */}
				{/* <Stack.Screen name="EditarPerfil" component={EditarPerfil}/> */}

				{/* ----------------------- */}
				<Stack.Screen name="InicioSesion" component={InicioSesion} options={{headerShown: false}}/>
				<Stack.Screen name="Registro" component={Registro} options={{headerShown: false}}/>
				<Stack.Screen name="HomeMain" component={mainAct} options={{headerShown: false}}/>
				<Stack.Screen name="PostRegistro" component={postRegistro} options={{headerShown: false}}/>
				<Stack.Screen name="subastaAct" component={subastaAct}/>
				<Stack.Screen name="EditarPerfil" component={EditarPerfil}/>
				<Stack.Screen name="MisMediosPago" component={MisMediosPago}/>
				<Stack.Screen name="MisEstadisticas" component={MisEstadisticas}/>



			</Stack.Navigator>
		</SafeAreaView>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	backgroundStyle:{
		flex: 1,
		backgroundColor:'#FFFFFF'
	}
});
