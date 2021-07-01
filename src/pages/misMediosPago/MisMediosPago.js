import React, { useState }  from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Modal} from 'react-native';
import styles from './Styles';

import Tarjeta from '../../components/MisMediosDePago/Tarjeta'
import Cuenta from '../../components/MisMediosDePago/CuentaBancaria'

export default function MisMediosPago({navigation}){
	
	const [showModal, setShowModal] = useState(false)

	const modalAdd = (
		<Modal
			animationType='fade' //Es la animación al abrirse
			transparent //Hace al Modal transparente
			visible={showModal} //Si se muestra en la pantalla o no
			onRequestClose={() => setShowModal(false)} //El botón Back de Android hace algo, en este caso lo cierro
			onShow={() => console.log('abrir')} //Al abrirse el modal, algo se hace
			onDismiss={() => console.log('cerrar')} //Al cerrarse el modal, algo se hace
			>
				<View style={styles.modalGeneric}>
					<View style={styles.modalView}>
						<TouchableOpacity style={styles.modalButton} onPress={() => setShowModal(false)}>
							<Text style={styles.modalButtonText}>X</Text>
						</TouchableOpacity>
						<Text>Elija el método de pago a cargar</Text>
						<Text></Text>
						<View style={{flexDirection: 'row'}}>
							<View style={{flexDirection: 'column', alignItems: 'center'}}>
								<TouchableOpacity onPress={() => {navigation.navigate('AgregarTarjeta'), setShowModal(false)}}><Image style={styles.icons} source={require('../../assets/Images/CreditCard.png')}></Image></TouchableOpacity>
								<Text>Tarjeta de Crédito</Text>
							</View>
							<View style={{flexDirection: 'column', alignItems: 'center'}}>
								<TouchableOpacity onPress={() => {navigation.navigate('AgregarCuentaBancaria'), setShowModal(false)}}><Image style={styles.icons} source={require('../../assets/Images/Bank.png')}></Image></TouchableOpacity>
								<Text>Cuenta Bancaria</Text>
							</View>
						</View>
					</View>
				</View>
		</Modal>
	)

	const jsonTest = [
	{
		identificador: 0,
		nombre: 'MASTERCARD',
		numero: '1234567890123456',
		fechavto: '2027-10-01',
		cliente: 0,
		titular: 'Benito Camelas'
	},{
		identificador: 1,
		nombre: 'MAESTRO',
		numero: '1234567890123456',
		fechavto: '2027-10-01',
		cliente: 0,
		titular: 'Benito Camelas'
	},{
		identificador: 2,
		nombre: 'AMERICAN EXPRESS',
		numero: '123456789012345',
		fechavto: '2020-10-01',
		cliente: 0,
		titular: 'Benito Camelas'
	},{
		identificador: 3,
		nombre: 'VISA DEBITO',
		numero: '1234567890123456',
		fechavto: '2021-10-01',
		cliente: 0,
		titular: 'Benito Camelas'
	},{
		identificador: 4,
		nombre: 'VISA CREDITO',
		numero: '1234567890123456',
		fechavto: '2027-10-01',
		cliente: 0,
		titular: 'Benito Camelas'
	},{
		identificador: 5,
		nombre: 'BANCO',
		numero: '1234567890123456789012',
		fechavto: '2025-10-01',
		cliente: 0,
		titular: 'Benito Camelas'
	},
	]

	return (
		<SafeAreaView style={styles.container}>

            {/* TODO -> LINEA QUE DIVIDE AL HEADER EDITARPERFIl */}
			<View styles={styles.main}>

				<ScrollView
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}>
					{jsonTest.map( (data) => {
						if (data.nombre === 'BANCO'){
							return(
								<TouchableOpacity key={data.identificador} onPress={() => navigation.navigate('VerMedioDePago', data)}>
									<Cuenta data={data}/>
								</TouchableOpacity>
							)
						} else {
							return(
								<TouchableOpacity key={data.identificador} onPress={() => navigation.navigate('VerMedioDePago', data)}>
									<Tarjeta data={data}/>
								</TouchableOpacity>
							)
						}
					})}
				</ScrollView>
			</View>



			<TouchableOpacity style={styles.roundedButton} onPress={() => setShowModal(true)}>
				<Text style={styles.roundedButtonText}>+</Text>
			</TouchableOpacity>

			{modalAdd}	

		</SafeAreaView>
	);
};