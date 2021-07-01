import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView,Modal} from 'react-native';
import styles from './Styles';
import {} from '../../controllers/PagosController';

export default function Oferta({postor,valor, usuarioActual}){

    function handleColor(){
        if(postor == usuarioActual){
            return '#26E023'
        }
        return '#C4C4C4'
    }

    return(
        <View style={{
            width:'90%',
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:handleColor(),
            justifyContent:'space-evenly',
            marginBottom: 10,
            alignSelf:'center'
        }}>
            <Text style={styles.text}>Postor: {postor}</Text>
            <Text style={styles.text}>$ {valor}</Text>
        </View>
    )

}