import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView,Modal} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './Styles';
import Oferta from '../../components/Oferta/Oferta';
import Loading from '../../components/Loading/Loading';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getMediosPago} from '../../controllers/PagosController';
import {getPujas,createPujas,endSubasta,finPuja} from '../../controllers/SubastasController';

export default function Subasta({navigation,route}){

	const {postor,foto,titulo,precio, division,idProducto,duenio, idSubasta,fecha,horaSubasta,minSubasta} = route.params;

	//USE STATES----------------------------------
    const [busy,setBusy] = useState(true);
	const [reload,setReload] = useState(true);
	//Modals
	const [showModalPago, setShowModalPago] = useState(true);
	const [showModalExit, setShowModalExit] = useState(false);
	const [showFinalModel, setShowFinalModel] = useState(false);
	const [finalState, setfinalState] = useState(false)
	//Medios de Pago
    const [mediosPago, setMediosPagos] = useState();
	const [medioActualPago,setMedioActualPago] = useState('');
	const [medioActualPagoPASS,setMedioActualPagoPASS] = useState();
	//Pujas
	const [pujas, setPujas] = useState();
	const [ownOffer, setOwnOffer] = useState(0);
	//Mejor oferta
	const [bestOffer, setBestOffer] = useState(parseInt(precio));
	const [bestUserOffer, setBestUserOffer] = useState('-');
	//Fechas y horarios
	//FechaObjetivo
	const fechaObj = new Date(fecha);
	const horaObj = horaSubasta;
	const minObj = minSubasta;
	const segObj = 0;
	//HOY
	const [hora,setHora] = useState(0);
	const [min,setMin] = useState(0);
	const [seg,setSeg] = useState(0);
	//---------------------------------------------

	useFocusEffect(
		React.useCallback(() => {
				const response = getMediosPagoJob();
				const auxResp = getPujasJob();
				let fechaHoy = new Date();
				setHora(fechaHoy.getHours());
				setMin(fechaHoy.getMinutes());
				setSeg(fechaHoy.getSeconds());
				const interval = setInterval(()=>{getPujasJob()},1000)
				return () => {
					clearInterval(interval);
				};
		}, [reload]));

	//Get de Medios de pago, se llama en el useFocusEffect
	const getMediosPagoJob = async()=>{
		const response = await getMediosPago(postor);
		if(response === undefined){
			console.log('Error, no hay medios de pago');
		}else{
			setMediosPagos(response.recordset);
			setBusy(false);
		}
	}
	//----------------------------------------------------

	//Get de pujas, se llama en el useFocusEffect
	const getPujasJob = async()=>{
		let fechaHoyAUX = new Date();
		setHora(fechaHoyAUX.getHours());
		setMin(fechaHoyAUX.getMinutes());
		setSeg(fechaHoyAUX.getSeconds());

		if(((minObj-(fechaHoyAUX.getMinutes())+10)==0) && ((segObj-(fechaHoyAUX.getSeconds())+59)==0)){
			handleEndSubasta();
			setShowFinalModel(true);
			if(postor==bestUserOffer){
				setfinalState(true);
			}
		}
		try {
			const responsePujas = await getPujas(idProducto);
			if(responsePujas != undefined){
				setPujas(responsePujas.recordset);
				setBestUserOffer(responsePujas.recordset[0].cliente);
				setBestOffer(responsePujas.recordset[0].importe);
				setReload(false);
			}
		} catch (error) {
			
		}
	}
	//--------------------------------------------

	const handleEndSubasta= async()=>{
		const resp3 = await endSubasta(idProducto);
		const resp2 = await finPuja(idProducto);
	}

    //Modal salir de subasta-
	const modalExit = (
		<Modal
		animationType='fade' //Es la animación al abrirse
		transparent //Hace al Modal transparente
		visible={showModalExit} //Si se muestra en la pantalla o no
		onRequestClose={() => setShowModalExit(false)} //El botón Back de Android hace algo, en este caso lo cierro
		>
			<View style={styles.modalGeneric} onPress={()=>console.log('a')}>
				<View style={styles.modalView}>
					<TouchableOpacity style={styles.modalButton} onPress={() => setShowModalExit(false)}>
						<Text style={styles.modalButtonText}>X</Text>
					</TouchableOpacity>
					<Text style={styles.titleText}>¿Desea retirarse de la subasta?</Text>
					<TouchableOpacity style={styles.buttonExit} onPress={()=>handleGoOut()}>
						<Text style={styles.buttonExitText}>Retirarse</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
    //-----------------------

    //Modal elegir medio pago
	const modalElegirMedioPago = (
		<Modal
		animationType='fade' //Es la animación al abrirse
		transparent //Hace al Modal transparente
		visible={showModalPago} //Si se muestra en la pantalla o no
		onRequestClose={() => setShowModalPago(false)} //El botón Back de Android hace algo, en este caso lo cierro
		>
			<View style={styles.modalGeneric} onPress={()=>console.log('a')}>
				<View style={styles.modalView}>
					<Text style={styles.titleText}>Antes de continuar, elija el método de pago a utilizar en esta subasta: </Text>
					{mediosPago === undefined ? null : mediosPago.map((key, data ) =>{
						//Simplifico nombre de tarjeta
						let str = mediosPago[data].nombre;
						let matches = str.match(/\b(\w)/g);
						let acronym = matches.join('');
						//-----------------------------
						//Numeros de la tarjeta--------
						let numTarjeta = mediosPago[data].numero;
						let auxTarjet = numTarjeta.slice(numTarjeta.length-4,numTarjeta.length);
						let auxHidden = "*".repeat(numTarjeta.length-4);
						let finalCard = auxHidden+'-'+auxTarjet
						//-----------------------------
						if(mediosPago[data].validado == "si"){
							return(
								<TouchableOpacity key={data} style={styles.pago} onPress={()=>handleElegirMedioPago(numTarjeta)}>
									<Text>{acronym}</Text>
									<Text>{finalCard}</Text>
								</TouchableOpacity>
							)
						}})
					}
					<Text> </Text>
					<Text style={styles.subtitleText}>Aquí aparecerán los medios de pago válidos. Si no aparece su forma de pago, recuerde cargarla desde "Perfil" {'->'} "Mis Medios de Pago".</Text>
				</View>
			</View>
		</Modal>
	)
    //-----------------------

	//Model de FIn de subasta
	const modalFinal = (
		<Modal
			animationType='fade' //Es la animación al abrirse
			transparent //Hace al Modal transparente
			visible={showFinalModel} //Si se muestra en la pantalla o no
			onRequestClose={() => setShowFinalModel(false)} //El botón Back de Android hace algo, en este caso lo cierro
		>
			<View style={styles.modalGeneric}>
				<View style={styles.modalView}>

					<Text style={styles.fontModalTitle}>{handleFinalState()}</Text>
					<Text></Text>

					<Text>La subasta de {titulo} a un precio de ${bestOffer}.</Text>
					<Text></Text>
					<Text>Siga conectado a SubastasYA, podría aparecer una subasta que le podría interesar.</Text>

					<TouchableOpacity style={styles.pago} onPress={()=>handleGoOut()}>
						<Text style={styles.buttonExitText}>Aceptar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
	//-----------------------

    //Salir de la subasta----
    const handleGoOut = ()=>{
        navigation.goBack();
    }
    //-----------------------

	//Hacer una oferta-------
	const handleOffer = async (precioOferta) =>{
		if(precioOferta < precio*0.01){
			alert('No puedes ofertar un valor menor al 1% del precio base.')
		}else if((division != 'oro' || division != 'platino') && (precioOferta > bestOffer*1.2)){
			alert('En tu categoria, las ofertas no pueden ser mayor al 20% de la mejor oferta.')
		}else if(precioOferta < bestOffer){
			alert('Su oferta debe ser mayor a la actual.')
		}else if(bestUserOffer == postor){
			alert('Su oferta es la mejor de la subasta.')
		}else{

			let fechaTotal = new Date();
			let str1 = fechaTotal.toString()
			let hora = str1.slice(str1.length - 46, str1.length-38);

			const oferData={
				idSubasta:idSubasta,
				idDuenioProducto: duenio,
				idProducto: idProducto,
				idCliente: postor,
				importe:precioOferta,
				comision:precioOferta*0.1,
				hora: hora
			}
			const resp = await createPujas(oferData);
		}
	}
	//----------------------

	//Elegir un medio pago--
	const handleElegirMedioPago = (numTarjeta)=>{
		setMedioActualPago(numTarjeta);
        setShowModalPago(false)
    }
	//----------------------
	//
	function handleFinalState() {
		if (!finalState) {
			return "Subasta finalizada"
		} else {
			return "¡Ganaste!"
		}
	}

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>setShowModalExit(true)}>
                    <Icon name={'times-circle'} style={styles.icono} color={'red'}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Postor: {postor}</Text>
                <Text style={styles.headerText}> </Text>
            </View>
			<View style={styles.main}>
				<Image source={{uri:foto}} style={styles.image}></Image>
				<View style={styles.subastasSub}>				
					<Text style={styles.subastaSubTitle}>{titulo}</Text>
					<Text style={styles.subastaSubTitle}>Base: ${precio}</Text>
				</View>
				<View style={styles.submain}>
					<View style={styles.submainText}>				
						<Text style={styles.subastaSubTitle}>Mejor oferta actual: </Text>
						<Text style={styles.subastaSubTitle}>${bestOffer} | P: {bestUserOffer}</Text>
					</View>				
					<View style={styles.submainText}>				
						<Text style={styles.subastaSubTitle}>Tiempo restante: </Text>
						<Text style={styles.subastaSubTitle}>00:0{minObj-min+10}:{segObj-seg+59}</Text>
					</View>
				</View>
			</View>
			<ScrollView style={styles.subasta}>
			{pujas === undefined ? null : pujas.map((key, data ) =>{
				return(
					<Oferta key={data} postor={pujas[data].cliente} valor={pujas[data].importe} usuarioActual={postor}/>
				)
				})
			}

			</ScrollView>
			<View style={styles.footer}>
				<TextInput
				style={styles.input}
				keyboardType={'number-pad'}
				placeholder={'Dinero a ofertar'}               
				autoCompleteType={'off'}
				onChangeText={(text)=>setOwnOffer(parseInt(text))}
				></TextInput>

				<TouchableOpacity style={styles.roundedButton} onPress={()=>handleOffer(ownOffer)}>
					<Text style={styles.roundedButtonText}>+</Text>
				</TouchableOpacity>
			</View>
            {modalExit}
            {modalElegirMedioPago}
			{modalFinal}
            {busy ? <Loading/> : null }

        </SafeAreaView>
    )
}