import React, { useState }  from 'react';
import {SafeAreaView, View, TouchableOpacity, TextInput, Text, Image} from 'react-native';
import styles from './Styles';




export default function MisMediosPago({navigation}){
    
    const [titular, setTitular] = useState('')
    const [dni, setDni] = useState('')
    const [numeroTarj, setNumeroTarj] = useState('')
    const [mes, setMes] = useState('')
    const [año, setAño] = useState('')
    const [codigo, setCodigo] = useState('')



	return (
		<SafeAreaView style={styles.container}>

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

            <TextInput
                style={styles.input}
                keyboardType={'number-pad'}
                secureTextEntry={false}
                placeholder={'Número de tarjeta'}
                clearTextOnFocus={true}
                onChangeText={(text) => setNumeroTarj(text)}
            />

            <View style={{flexDirection: 'row'}}>
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
            </View>
            
            <TextInput
                style={styles.inputCorto}
                keyboardType={'numeric'}
                secureTextEntry={true}
                placeholder={'CVV'}
                clearTextOnFocus={true}
                onChangeText={(t) => setCodigo(t)}
            />


            <TouchableOpacity style={styles.buttonWrapper} onPress={()=> {console.log('Tarjeta cargada')}}>
                <Text style={styles.buttonText}>Cargar Tarjeta</Text>
            </TouchableOpacity>

            

		</SafeAreaView>
	);
};