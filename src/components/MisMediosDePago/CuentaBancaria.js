import React from 'react'
import { Text, View, Image} from 'react-native'
import styles from './Styles'
import BankCard from '../../assets/Images/BankCardLogo.png'

export default function CuentaBancaria(props){

    //Props
    const numero = props.data.numero
    const validez = props.data.validado


    const handleColor = ()=>{
        if(validez == "si"){
            return "#26E023"
        }else if(validez == "no"){
            return "red"
        }
        return "yellow"
    }

	return (
        <View style={{        
            backgroundColor: "#006346",
            borderRadius: 10,
            marginTop: 10,
            padding: 10,
            borderColor: handleColor(),
            borderWidth:5}}>
            <Image source={BankCard} style={styles.cardIco}/>
            <Text style={styles.cardText}>{numero}</Text>
        </View>
        
	)

}