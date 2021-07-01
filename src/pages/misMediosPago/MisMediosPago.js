import React, { useState, useEffect }  from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView, Modal, RefreshControl} from 'react-native';
import styles from './Styles';
import Tarjeta from '../../components/MisMediosDePago/Tarjeta';
import Cuenta from '../../components/MisMediosDePago/CuentaBancaria';
import Loading from '../../components/Loading/Loading';
import {getMediosPago} from '../../controllers/PagosController';

export default function MisMediosPago({navigation, route}){
    
	//Route Params
	const {user} = route.params;

	//UseState
    //UseState funcionamiento
	const [busy,setBusy] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
    const [reload,setReload] = useState(true);
	//UseState logicos
    const [mediosPago, setMediosPago] = useState();
	const [showModal, setShowModal] = useState(false)


	useEffect( async () => {
        console.log("ME ACTUALIZO EN MIS MEDIOS DE PAGO");
		const response = await getMediosPago(user);
		if(response == undefined){
			console.log("Error al traer los medios de pago");
		}else{
			setMediosPago(response.recordset);
			setBusy(false);
		}
	}, [reload])
	
    const onRefresh =() => {
        setReload(!reload);
        setRefreshing(true);
        setTimeout(()=> setRefreshing(false), 3000);
    };

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
								<Text>Tarjeta</Text>
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

	return (
		<SafeAreaView style={styles.container}>
			{busy ? <Loading/> : null }
            {/* TODO -> LINEA QUE DIVIDE AL HEADER EDITARPERFIl */}
			<View styles={styles.main}>

				<ScrollView
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl
							refreshing = {refreshing}
							onRefresh = {onRefresh}
						/>
					}>
					{mediosPago === undefined ? null : mediosPago.map((data) => {
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