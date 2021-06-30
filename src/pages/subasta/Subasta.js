import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView,Modal} from 'react-native';
import styles from './Styles';
import {getSubasta} from '../../controllers/SubastasController';
import Catalogo from '../../components/Catalogo/Catalogo';
import Loading from '../../components/Loading/Loading';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Subasta({navigation,route}){

    const [busy,setBusy] = useState(false); //CAMBIAR A TRUE
    const [subastas, setSubastas] = useState();
    const [reload,setReload] = useState(true);
	const [showModalPago, setShowModalPago] = useState(true)
	const [showModalExit, setShowModalExit] = useState(false)

    //Modal salir de subasta-
	const modalExit = (
		<Modal
			animationType='fade' //Es la animación al abrirse
			transparent //Hace al Modal transparente
			visible={showModalExit} //Si se muestra en la pantalla o no
			onRequestClose={() => setShowModal(false)} //El botón Back de Android hace algo, en este caso lo cierro
			onShow={() => console.log('abrir')} //Al abrirse el modal, algo se hace
			onDismiss={() => console.log('cerrar')} //Al cerrarse el modal, algo se hace
			>
				<View style={styles.modalGeneric} onPress={()=>console.log('a')}>
					<View style={styles.modalView}>
						<TouchableOpacity style={styles.modalButton} onPress={() => setShowModalExit(false)}>
							<Text style={styles.modalButtonText}>X</Text>
						</TouchableOpacity>
						<Text>¿Desea retirarse de la subasta?</Text>
                        <TouchableOpacity onPress={()=>handleGoOut()}>
                            <Text>Retirarse</Text>
                        </TouchableOpacity>
					</View>
				</View>
		</Modal>
	)
    //-----------------------

    //Modal elegir medio pago --MODIFICAR
	const modalElegirMedioPago = (
		<Modal
			animationType='fade' //Es la animación al abrirse
			transparent //Hace al Modal transparente
			visible={showModalPago} //Si se muestra en la pantalla o no
			onRequestClose={() => setShowModal(false)} //El botón Back de Android hace algo, en este caso lo cierro
			onShow={() => console.log('abrir')} //Al abrirse el modal, algo se hace
			onDismiss={() => console.log('cerrar')} //Al cerrarse el modal, algo se hace
			>
				<View style={styles.modalGeneric} onPress={()=>console.log('a')}>
					<View style={styles.modalView}>
						<TouchableOpacity style={styles.modalButton} onPress={() => setShowModalPago(false)}>
							<Text style={styles.modalButtonText}>X</Text>
						</TouchableOpacity>
						<Text>¿Desea retirarse de la subasta?</Text>
                        <TouchableOpacity onPress={()=>handleGoOut()}>
                            <Text>Retirarse</Text>
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

    return(
        <SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>setShowModalExit(true)}>
                    <Icon name={'times-circle'} style={styles.icono} color={'red'}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Subastador: 37 </Text>
                <Text style={styles.headerText}> </Text>
            </View>
            {modalExit}
            {modalElegirMedioPago}
        </SafeAreaView>
    )
}