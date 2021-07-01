import React, { useState }  from 'react';
import {SafeAreaView, View, TouchableOpacity, TextInput, Text, Modal} from 'react-native';
import styles from './Styles';

import Tarjeta from '../../components/MisMediosDePago/Tarjeta'
import Cuenta from '../../components/MisMediosDePago/CuentaBancaria'


export default function VerMedio({navigation, route}){
    
    const data = route.params

    let numeros
    let showCard = <Tarjeta data={data}/>

    
    
    const handleEliminar = () => {
        console.log('eliminar')
        navigation.goBack()
    }

    

    switch (data.nombre) {
        case 'BANCO':
            showCard = <Cuenta data={data} />
            numeros = <Text>{data.numero}</Text>
            break
        case 'AMERICAN EXPRESS':
            numeros = <Text>{data.numero.slice(0, 4) + " " + data.numero.slice(4, 10) + " " + data.numero.slice(10, 15)}</Text>
            break
        default:
            numeros = <Text>{data.numero.slice(0, 4) + "-" + data.numero.slice(4, 8) + "-" + data.numero.slice(8, 12) + "-" + data.numero.slice(12, 16)}</Text>
    }

	return (
		<SafeAreaView style={styles.container}>

            
            {showCard}
            <View style={styles.wrapper}>
                <Text style={{alignSelf: 'center'}}>{data.titular}</Text>
            </View>

            <View style={styles.wrapper}>
                <Text style={{alignSelf: 'center'}}>{numeros}</Text>
            </View>
        
            {data.fechavto == null ? null : <View style={styles.wrapper}>
                <Text style={{alignSelf: 'center'}}> {data.fechavto.slice(5, 7) +" / "+data.fechavto.slice(0, 4)}</Text>
            </View>}

            <TouchableOpacity style={styles.buttonWrapperLogOut} onPress={() => handleEliminar()}>
                <Text style={styles.buttonTextLogOut}>Eliminar Tarjeta</Text>
            </TouchableOpacity>

		</SafeAreaView>
	);
};