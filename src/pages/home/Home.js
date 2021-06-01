import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import {getSubasta} from '../../controllers/SubastasController'
import Catalogo from '../../components/Catalogo/Catalogo'
import Loading from '../../components/Loading/Loading'

export default function Home({navigation}){
    const [busy,setBusy] = useState(true);
    const [subastas, setSubastas] = useState();
    const [reload,setReload] = useState(true);

    useEffect(async() => {
        const response = await getSubasta();
        if(response === undefined){
            console.log('Error, no hay subastas');
        }else{
            setSubastas(response.recordset);
            setBusy(false);
        }
    }, [reload])

    const handleVerSubasta = () =>{
        navigation.navigate('VerSubasta');
    }

	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            <View style={styles.header}>
                <Text style={styles.headerText}>Home</Text>
            </View>
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                {subastas === undefined ? null : subastas.map((key, data ) =>{
                    return(
                        <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleVerSubasta()}>
                            <Catalogo key={subastas[data].identificador} titulo={subastas[data].titulo} division={subastas[data].categoria}/>
                        </TouchableOpacity>
                    )})
                }
            </ScrollView> 
            </View>
		</SafeAreaView>
	);
};