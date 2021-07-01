import React, { useState }  from 'react';
import {SafeAreaView, View, TouchableOpacity, TextInput, Text, Modal, ScrollView, Alert} from 'react-native';
import styles from './Styles';

import Tarjeta from '../../../components/MisMediosDePago/Tarjeta'


export default function MisMediosPago({navigation}){
    
    const fakeCard = {
		identificador: -1,
		nombre: 'BANCO',
		numero: 'XXXX XXXX XXXX ****',
		fechavto: 'YYYY-MM-DD',
		cliente: -1
	}

    const [titular, setTitular] = useState('')
    const [dni, setDni] = useState('')
    const [numeroTarj, setNumeroTarj] = useState('')
    const [mes, setMes] = useState('')
    const [año, setAño] = useState('')
    const [codigo, setCodigo] = useState('')

    const [showModal, setshowModal] = useState(false) 

    const handleAgregar = () => {
        //console.log("ENTRANTE: " + numeroTarj);
        let numero = numeroTarj.replace(/ /g, '')
        //console.log("FINAL : " + numero);
        numero = numero.replace(/-/g, '')
        //console.log("FINAL -: " + numero);
        numero = numero.replace(/,/g, '')
        //console.log("FINAL ,: " + numero);
        //numero = numero.replace(/./g, '') //NO FUNCIONA CON PUNTO
        //console.log("FINAL ,: " + numero);

        if (numero.length < 15 || numero.length > 16 || dni.length === 0 || titular.length === 0 || mes.length < 1 || mes.length > 2 || año.length != 4 || codigo.length != 3) {
            console.log('error');
            Alert.alert("Datos erróneos", "Revise que los datos ingresados sean correctos", [{text: 'Cerrar'}])
        } else {
            setshowModal(true)

            let fechaStr = (mes.length === 1) ? año + "-0" + mes: año + '-' + mes 

            const tarjetaCargarBack = {
                numero: numero,
                fechavto: fechaStr,
                titular: titular,
                dni: dni,
                codigo: codigo
            }

            console.log(tarjetaCargarBack);
        }
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

            <Tarjeta data={fakeCard} />

            <ScrollView >


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
                placeholder={'Número de tarjeta'}
                clearTextOnFocus={true}
                onChangeText={(text) => setNumeroTarj(text)}
            />

            <View style={{flexDirection: 'row', alignContent:'center',}}>
                <TextInput
                    style={styles.inputCorto}
                    keyboardType={'numeric'}
                    secureTextEntry={false}
                    placeholder={'Mes de Venc.'}
                    clearTextOnFocus={true}
                    onChangeText={(t) => setMes(t)}
                />
                <TextInput
                    style={styles.inputCorto}
                    keyboardType={'numeric'}
                    secureTextEntry={false}
                    placeholder={'Año de Venc.'}
                    clearTextOnFocus={true}
                    onChangeText={(t) => setAño(t)}
                />
                <TextInput
                    style={styles.inputCorto}
                    keyboardType={'numeric'}
                    secureTextEntry={true}
                    placeholder={'CVV'}
                    clearTextOnFocus={true}
                    onChangeText={(t) => setCodigo(t)}
                />
            </View>
            
            </ScrollView>


            <TouchableOpacity style={styles.buttonWrapper} onPress={()=> handleAgregar()}>
                <Text style={styles.buttonText}>Cargar Tarjeta</Text>
            </TouchableOpacity>

            

		</SafeAreaView>
	);
};