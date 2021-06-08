import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';

import Tarjeta from '../../components/MisMediosDePago/Tarjeta'
import Cuenta from '../../components/MisMediosDePago/CuentaBancaria'

export default function MisMediosPago({navigation}){

	const jsonTest = [
	{
		identificador: 0,
		nombre: 'MASTERCARD',
		numero: '1234567890123456',
		fechavto: '2027-10-01',
		cliente: 0
	},{
		identificador: 1,
		nombre: 'MAESTRO',
		numero: '1234567890123456',
		fechavto: '2027-10-01',
		cliente: 0
	},{
		identificador: 2,
		nombre: 'AMERICAN EXPRESS',
		numero: '1234567890123456',
		fechavto: '2020-10-01',
		cliente: 0
	},{
		identificador: 3,
		nombre: 'VISA DEBITO',
		numero: '1234567890123456',
		fechavto: '2021-10-01',
		cliente: 0
	},{
		identificador: 4,
		nombre: 'VISA CREDITO',
		numero: '1234567890123456',
		fechavto: '2027-10-01',
		cliente: 0
	},{
		identificador: 5,
		nombre: 'BANCO',
		numero: '1234567890123456789012',
		fechavto: '2025-10-01',
		cliente: 0
	},]

	return (
		<SafeAreaView style={styles.container}>

            {/* TODO -> LINEA QUE DIVIDE AL HEADER EDITARPERFIl */}
			<View styles={styles.main}>

				<ScrollView
					showsHorizontalScrollIndicator={false}
            		showsVerticalScrollIndicator={false}>
					{jsonTest.map( (data) => {
						if (data.numero.length == 16){
							return(
								<TouchableOpacity key={data.identificador}>
									<Tarjeta data={data} />
								</TouchableOpacity>
							)
						} else {
							return(
								<TouchableOpacity key={data.identificador}>
									<Cuenta data={data} />
								</TouchableOpacity>
							)
						}
					})}
				</ScrollView>
			</View>


			<TouchableOpacity style={styles.roundedButton}>
				<Text style={styles.roundedButtonText}>+</Text>
			</TouchableOpacity>

		</SafeAreaView>
	);
};