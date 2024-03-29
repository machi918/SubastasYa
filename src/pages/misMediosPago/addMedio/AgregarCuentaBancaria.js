import React, { useState }  from 'react';
import {SafeAreaView, Modal, View, TouchableOpacity, TextInput, Text, ScrollView, Alert} from 'react-native';
import styles from './Styles';
import {addMedio} from '../../../controllers/PagosController'
import Cuenta from '../../../components/MisMediosDePago/CuentaBancaria'


export default function MisMediosPago({navigation, route}){
    
    //Params
    const {user} = route.params;

    //Use State logicos
    const [titular, setTitular] = useState('')
    const [dni, setDni] = useState('')
    const [numeroCuenta, setNumeroCuenta] = useState('')
    const [showModal, setshowModal] = useState(false)

    const fakeCount = {
		identificador: -1,
		nombre: 'BANCO',
		numero: 'XXXXXXXXXXXXXXXXXXXXXX',
		fechavto: 'YYYY-MM-DD',
		cliente: -1
	}

    const handleAgregar = () => {
        let numero = numeroCuenta.replace(/ /g, '')
        numero = numero.replace(/-/g, '')
        numero = numero.replace(/,/g, '')

        if (numero.length != 22 || dni.length === 0 || titular.length === 0) {
            Alert.alert("Datos erróneos", "Revise que los datos ingresados sean correctos", [{text: 'Cerrar'}])
        } else {
            setshowModal(true)
            addBanco();
        }
    }
    const addBanco = async(fecha)=>{
        let data={
            nombre:"BANCO",
            titular:titular,
            dni:dni,
            numero:numeroCuenta,
            fechavto:null,
            cliente: user,
        }
        const response = await addMedio(data);
        console.log("Tarjeta cargada");
    }

    const modalAdd = (
		<Modal
			animationType='fade'
			transparent
			visible={showModal} 
			onRequestClose={() => {}}
        >
            <View style={styles.modalGeneric}>
                <View style={styles.modalView}>
                    <Text style={styles.modalHeaderText}>Gracias por agregar su método de pago</Text>
                    <Text/>
                    <Text>Podrá utilizar este medio de pago una vez lo hayamos verificado. Mientras tanto sientase libre de seguir usando nuestra aplicación.</Text>
                    <Text/>
                    <TouchableOpacity  style={styles.buttonModal} onPress={() => {navigation.goBack(), setshowModal(false)}}>
                        <Text style={styles.buttonText}>   Volver   </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )

	return (
		<SafeAreaView style={styles.container}>
            {modalAdd}
            <Cuenta data={fakeCount}/>
            <ScrollView style={{width: '90%'}}>
                <TextInput
                    style={styles.input}
                    secureTextEntry={false}
                    placeholder={'Nombre del Titular'}
                    clearTextOnFocus={true}
                    onChangeText={(text) => setTitular(text)}
                    />

                <TextInput
                    style={styles.input}
                    keyboardType={'number-pad'}
                    secureTextEntry={false}
                    placeholder={'Documento del Titular'}
                    clearTextOnFocus={true}
                    onChangeText={(text) => setDni(text)}
                    />

                <TextInput
                    style={styles.input}
                    keyboardType={'number-pad'}
                    secureTextEntry={false}
                    placeholder={'Número de la cuenta'}
                    clearTextOnFocus={true}
                    onChangeText={(text) => setNumeroCuenta(text)}
                    />
            </ScrollView>

            <TouchableOpacity style={styles.buttonWrapper} onPress={()=> handleAgregar()}>
                <Text style={styles.buttonText}>Cargar Cuenta</Text>
            </TouchableOpacity>

            

		</SafeAreaView>
	);
};