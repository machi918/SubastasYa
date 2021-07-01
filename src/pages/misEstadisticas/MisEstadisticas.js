import React, { useState, useEffect }   from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import {PieChart,BarChart} from 'react-native-chart-kit'
import { Dimensions } from "react-native";

import { getEstadisticasUser } from '../../controllers/EstadisticasController';
import Loading from '../../components/Loading/Loading';

export default function MisEstadisticas({navigation, route}){

	//Route Params
	const {user} = route.params

	//UseState
    //UseState funcionamiento
	const [busy,setBusy] = useState(true)
	//UseState logicos
	const [stats, setStats] = useState()
	const [pie, setPie] = useState()

	useEffect( async () => {
        console.log("PIDO ESTADISTICAS");
		const response = await getEstadisticasUser(user);
		console.log('response devolvio');
		if(response == undefined){
			console.log("Error al traer estadisticas");
		}else{
			console.log(response);
			setStats(response[0]);
			setPie(response[1])
			setBusy(false);
		}

	}, [])

	const screenWidth = Dimensions.get("window").width -10;

	const chartConfig = {
		backgroundGradientFrom: "#1E2923",
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: "#08130D",
		backgroundGradientToOpacity: 0,
		color: (opacity = 1) => `rgba(79, 175, 229, ${opacity})`,
		// color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
		strokeWidth: 2, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false // optional
	};

	const arrayPie = (listado) => {

		const colores = ['blue', 'red', 'rgb(232, 195, 158)', 'black', 'green', 'grey', 'orange', 'brown', '#008081',  'violet']

		let arrayFinal = []

		for (let i = 0; i < listado.length; i++) {
			arrayFinal.push({
				name: listado[i].division,
				categoria: listado[i].Cantidad,
				color: colores[i],
				legendFontColor: '#7F7F7F',
				legendFontSize: 15,
			})
		}

		return arrayFinal
	}

	const pieData = [
		{
			name: 'Arte',
			categoria: 20,
			color: 'blue',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Automovilismo',
			categoria: 9,
			color: 'red',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Cocina',
			categoria: 1,
			color: 'rgb(232, 195, 158)',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Coleccionables',
			categoria: 18,
			color: 'black',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Deportes',
			categoria: 5,
			color: 'green',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Electro',
			categoria: 2,
			color: 'grey',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Libros',
			categoria: 5,
			color: 'orange',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Muebles',
			categoria: 0,
			color: 'brown',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'TV y Cine',
			categoria: 8,
			color: '#008081',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Misceláneo',
			categoria: 3,
			color: 'violet',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
	];

	const barData = {
		labels: ["En", "Feb", "Mar", "Abr", "May", "Jun","Jul","Ago","Sep","Oct","Nov", "Dic"],
		datasets: [
		{
			data:
				[stats === undefined ? 0 : stats.enero,
				stats === undefined ? 0 : stats.febrero,
				stats === undefined ? 0 : stats.marzo,
				stats === undefined ? 0 : stats.abril,
				stats === undefined ? 0 : stats.mayo,
				stats === undefined ? 0 : stats.junio,
				stats === undefined ? 0 : stats.julio,
				stats === undefined ? 0 : stats.agosto,
				stats === undefined ? 0 : stats.septiembre,
				stats === undefined ? 0 : stats.octubre,
				stats === undefined ? 0 : stats.noviembre,
				stats === undefined ? 0 : stats.diciembre]
		}
		]
	};


	
	return (
		<SafeAreaView style={styles.container}>
			{busy ? <Loading/> : null}
			<View style={styles.dataContainer}>
				<View style={styles.data}>
					<Text style={styles.infoText}>SUBASTAS PARTICIPADAS</Text>
					<Text style={styles.dataText}>{stats === undefined ? '-' : stats.cantidad_subastas}</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.infoText}>PUJES REALIZADOS</Text>
					<Text style={styles.dataText}>{stats === undefined ? '-' : stats.cantidad_pujes}</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.infoText}>SUBASTAS GANADAS</Text>
					<Text style={styles.dataText}>{stats === undefined ? '-' : stats.ganadas}</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.infoText}>TOTAL GASTADO</Text>
					<Text style={styles.dataText}>$ {stats === undefined ? '-' : stats.gastado}</Text>
				</View>
			</View>

			<Text style={{borderBottomColor:'black',borderBottomWidth:2,paddingTop:3}}>Subastas Participadas por Mes</Text>
			<View>
			<BarChart
			style={{alignSelf:'center'}}
			data={barData}
			width={screenWidth}
			height={220}
			yAxisLabel=""
			chartConfig={chartConfig}
			verticalLabelRotation={0}
			/>				
			</View>
			
			<Text style={{borderBottomColor:'black',borderBottomWidth:2,paddingTop:3}}>Categorías Participadas</Text>
			<PieChart
			data={pie === undefined ? [] : arrayPie(pie)}
			width={screenWidth}
			height={220}
			chartConfig={chartConfig}
			accessor={"categoria"}
			backgroundColor={"transparent"}
			center={[10,10]}
			absolute
			/>
		</SafeAreaView>
	);
};