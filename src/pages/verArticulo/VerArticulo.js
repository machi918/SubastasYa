import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import getArticulo from '../../controllers/SubastasController'

export default function VerArticulo(){
    const [busy,setBusy] = useState(true);
    const [subastas, setSubastas] = useState();
    const [reload,setReload] = useState(true);

    // useEffect(async() => {
    //     const response = await getSubasta();
    //     if(response === undefined){
    //         console.log('Error, no hay subastas');
    //     }else{
    //         setSubastas(response.recordset);
    //         setBusy(false);
    //     }
    // }, [reload])

	return (
		<SafeAreaView style={styles.container}>
            {/* {busy ? <Loading/> : null } */}
            <View style={styles.header}>
                <Text style={styles.headerText}>ACA VA UNA IMAGEN</Text>
            </View>
            <View style={styles.subheader}>
                <Text style={styles.subheaderText}>TITULOOOOOOOOOO</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoText}>VENDEDOR</Text>
                <Text style={styles.infoText}>Base $1000</Text>
            </View>
            <View style={styles.main}>
                <Text>Loren impusum invibelvbskerbvksbervbskervbkserbvksebrvbserbdsfkvbserbve</Text>
            </View>
		</SafeAreaView>
	);
};