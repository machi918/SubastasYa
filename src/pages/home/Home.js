import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import {getSubasta} from '../../controllers/SubastasController'
import Catalogo from '../../components/Catalogo/Catalogo'

export default function Home(){
    const [subastas, setSubastas] = useState({})

    useEffect(async() => {
        try {
            const response = await getSubasta();
            const data = response.recordset;
            if(data === undefined){
                console.log('Error, no hay subastas');
            }else{
                setSubastas(data);
                console.log('ENTRE 4');
            }
        } catch(e) {
              // error reading value
        }
    }, [])

	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Home</Text>
            </View>
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                {/* <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/> */}
                {subastas.map((key,data)=>{
                    return <Catalogo id={data.identificador} cat={data.categoria}/>
                })}

                


            </ScrollView> 
            </View>
		</SafeAreaView>
	);
};