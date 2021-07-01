import React from 'react'
import { Text, View, Image} from 'react-native'
import styles from './Styles'
import BankCard from '../../assets/Images/BankCardLogo.png'

export default function CuentaBancaria(props){

    const numero = props.data.numero

	return (
        <View style={styles.bankContainer}>
            <Image source={BankCard} style={styles.cardIco}/>
            <View style={styles.row}>
            <Text style={styles.cardText}>{numero}</Text>
            <Text style={styles.cardText}></Text>

            </View>
        </View>
        
	)

}