import React from 'react'
import { Text, View, Image} from 'react-native'
import styles from './Styles'
import MasterCard from '../../assets/Images/MasterCardLogo.png'
import VisaCard from '../../assets/Images/VisaCardLogo.png'
import AmericanCard from '../../assets/Images/AmericanCardLogo.png'
import BankCard from '../../assets/Images/BankCardLogo.png'

export default function Tarjeta(props){

    const nombre = props.data.nombre
    const numero = props.data.numero
    const fechavto = props.data.fechavto

    let imagen
    let texto = '**** - **** - **** - ' + numero.slice(-4)

    switch (nombre) {
        case 'AMERICAN EXPRESS':
            imagen = AmericanCard
            texto = '****   ******   ' + numero.slice(-5)
            break
        case 'MAESTRO':
        case 'MASTERCARD':
            imagen = MasterCard
            break
        case 'VISA DEBITO':
            imagen = VisaCard
            break
        case 'VISA CREDITO':
            imagen = VisaCard
            break
        default:
            imagen = BankCard
    }

	return (
        <View style={styles.container}>
            <Image source={imagen} style={styles.cardIco}/>
            <Text style={styles.cardText}>{texto}</Text>
            <Text style={styles.cardText}>
                {fechavto.slice(5, 7)} / {fechavto.slice(0, 4)}
            </Text>
        </View>
        
	)

}