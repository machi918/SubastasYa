import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import {PieChart,BarChart} from 'react-native-chart-kit'
import { Dimensions } from "react-native";

export default function MisEstadisticas({navigation}){

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

	const data = {
		labels: ["En", "Feb", "Mar", "Abr", "May", "Jun","Jul","Ago","Sep","Oct","Nov", "Dic"],
		datasets: [
		{
			data: [20, 45, 28, 80, 99, 43,23,30,16,42,20,42]
		}
		]
	};


	
	return (
		<SafeAreaView style={styles.container}>

            {/* TODO -> LINEA QUE DIVIDE AL HEADER EDITARPERFIl */}
			<View style={styles.dataContainer}>
				<View style={styles.data}>
					<Text style={styles.infoText}>SUBASTAS PARTICIPADAS</Text>
					<Text style={styles.dataText}>XXX</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.infoText}>PUJES REALIZADOS</Text>
					<Text style={styles.dataText}>XXX</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.infoText}>SUBASTAS GANADAS</Text>
					<Text style={styles.dataText}>XXX</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.infoText}>TOTAL GASTADO</Text>
					<Text style={styles.dataText}>$XXXX</Text>
				</View>
			</View>
			<Text style={{borderBottomColor:'black',borderBottomWidth:2,paddingTop:3}}>Subastas Participadas por Mes</Text>
			<View>
			<BarChart
			style={{alignSelf:'center'}}
			data={data}
			width={screenWidth}
			height={220}
			yAxisLabel=""
			chartConfig={chartConfig}
			verticalLabelRotation={0}
			/>				
			</View>
			<Text style={{borderBottomColor:'black',borderBottomWidth:2,paddingTop:3}}>Categorías Preferidas</Text>
			<PieChart
			data={pieData}
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