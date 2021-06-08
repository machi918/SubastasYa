import React from 'react'
import { Text, View, Image} from 'react-native'
import styles from './Styles'
import BankCard from '../../assets/Images/BankCardLogo.png'

export default function Tarjeta(props){

    const numero = props.data.numero
    const fechavto = props.data.fechavto

	return (
        <View style={styles.bankContainer}>
            <Image source={BankCard} style={styles.cardIco}/>
            <View style={styles.row}>
            <Text style={styles.cardText}>{numero}</Text>
            <Text style={styles.cardText}>
                {fechavto.slice(5, 7)} / {fechavto.slice(0, 4)}
            </Text>

            </View>
        </View>
        
	)

}