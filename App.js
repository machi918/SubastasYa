import 'react-native-gesture-handler';

import React from 'react';
import {  SafeAreaView,  ScrollView,  StatusBar,  StyleSheet,  Text,  useColorScheme,  View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import Loading from './src/components/Loading/Loading';
import Guest from './src/components/Guest/Guest';
import verDetalle from './src/pages/verDetalleArticulo/verDetalle';
import subastasCat from './src/pages/subastasCategoria/subastasCat';



export default function App(){
	const Stack = createStackNavigator();
	const Tab = createBottomTabNavigator();

	const props = {
		register: 'Gracias por registrarte a SubastaYa. Verificaremos tus datos y una vez aprobados, nos contactaremos por mail para que genere su contraseña.',
		badlogin:'Correo o contraseña incorrectos, intente denuevo.',
		notaproved: 'Todavía no has sido aprobado para ingresar a la aplicación. Por favor, espere a su mail de confirmación.'
	}

	//Main tab---------------------------------
	const mainAct = ()=>{

		return(
			<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Home') {
						iconName = 'home';
					} else if (route.name === 'Categorias') {
						iconName = 'bars';
					}
					else if (route.name === 'MisArticulos') {
						iconName = 'th';
					}
					else if (route.name === 'Perfil') {
						iconName = 'user';
					}
					//Retorno el componente Icon acá
					return <Icon name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: '#4FAFE5',
				inactiveTintColor: 'gray',
			}}
			>
				<Tab.Screen name="Home" component={Home} options={{ title: 'Home'}}/>
				<Tab.Screen name="Categorias" component={Categorias} options={{ title: 'Categorías'}}/>
				<Tab.Screen name="MisArticulos" component={MisArticulos} options={{ title: 'Mis Artículos'}}/>
				<Tab.Screen name="Perfil" component={Perfil}/>

			</Tab.Navigator>	
		)
	}
	//Subasta Act----------------------------
	const subastaAct = ()=>{
		return(
			<Stack.Navigator>
				<Stack.Screen name="VerSubasta" component={VerSubasta}/>
				<Stack.Screen name="VerArticulo" component={VerArticulo}/>
				<Stack.Screen name="Subasta" component={Subasta}/>
			</Stack.Navigator>
		)
	}
	//---------------------------------------

	return (
		<NavigationContainer>
		<SafeAreaView style={styles.backgroundStyle}>
			<Stack.Navigator>
				<Stack.Screen name="InicioSesion" component={InicioSesion} options={{headerShown: false}}/>
				<Stack.Screen name="Registro" component={Registro} options={{headerShown: false}}/>
				<Stack.Screen name="HomeMain" component={mainAct} options={{headerShown: false}}/>
				<Stack.Screen name="subastaAct" component={subastaAct}/>
				<Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ title: 'Editar Perfil', headerTitleAlign:'center', headerStyle:{borderBottomColor:'#4FAFE5',borderBottomWidth: 2} }}/>
				<Stack.Screen name="MisMediosPago" component={MisMediosPago} options={{ title: 'Mis Medios de Pago', headerTitleAlign:'center', headerStyle:{borderBottomColor:'#4FAFE5', borderBottomWidth: 2} }}/>
				<Stack.Screen name="MisEstadisticas" component={MisEstadisticas} options={{ title: 'Mis Estadisticas', headerTitleAlign:'center', headerStyle:{borderBottomColor:'#4FAFE5', borderBottomWidth: 2} }}/>
				<Stack.Screen name="InformativaRegistro" component={Informativa} initialParams={{ text:props.register }} options={{headerShown: false}}/>
				<Stack.Screen name="InformativaBadLogin" component={Informativa} initialParams={{ text:props.badlogin }} options={{headerShown: false}}/>
				<Stack.Screen name="InformativaNotAproved" component={Informativa} initialParams={{ text:props.notaproved }} options={{headerShown: false}}/>
				<Stack.Screen name="VerSubasta" component={VerSubasta} options={{ title: 'Subasta', headerTitleAlign:'center', headerStyle:{borderBottomColor:'#4FAFE5', borderBottomWidth: 2} }}/>
				<Stack.Screen name="VerArticulo" component={VerArticulo} options={{ title: 'Articulo' , headerTitleAlign:'center', headerStyle:{borderBottomColor:'#4FAFE5', borderBottomWidth: 2}}}/>
				<Stack.Screen name="MisArticulos" component={mainAct} options={{headerShown: false}}/>
				<Stack.Screen name="Loading" component={Loading} options={{headerShown: false}}/>
				<Stack.Screen name="Guest" component={Guest} options={{headerShown: false}}/>
				<Stack.Screen name="verDetalle" component={verDetalle} options={{title: 'Detalles',headerTitleAlign:'center', headerStyle:{borderBottomColor:'#4FAFE5', borderBottomWidth: 2}}}/>
				<Stack.Screen name="verSubastasCat" component={subastasCat} options={{title: 'Subastas',headerTitleAlign:'center', headerStyle:{borderBottomColor:'#4FAFE5', borderBottomWidth: 2}}}/>
			</Stack.Navigator>
		</SafeAreaView>
		</NavigationContainer>
	);
	//---------------------------------------
};

//-------------------------------------------
const styles = StyleSheet.create({
	backgroundStyle:{
		flex: 1,
		backgroundColor:'#FFFFFF'
	},
	head:{

	}
});
//-------------------------------------------

