import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Articulo from '../../components/Articulo/Articulo'

export default function MisArticulos(){
	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Mis Artículos</Text>
            </View>
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                <Articulo fecha={'12/10/2022'} estado={'Aceptado'}/>
                <Articulo fecha={'12/10/2022'} estado={'Vendido'}/>
                <Articulo fecha={'-'} estado={'Rechazado'}/>
                <Articulo fecha={'Pendiente'} estado={'Pendiente'}/>
                <Articulo fecha={'12/10/2022'} estado={'Aceptado'}/>
                <Articulo fecha={'12/10/2022'} estado={'Aceptado'}/>
            </ScrollView> 
                


            </View>
		</SafeAreaView>
	);
};