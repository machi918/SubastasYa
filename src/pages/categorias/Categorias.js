import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Categoria from '../../components/Categoria/Categoria';
import {categorias} from '../../assets/Categorias/CategoriasData';

export default function Categorias(){
	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Categorías</Text>
            </View>
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                {categorias.map((key, data ) =>{
                    return(
                        <TouchableOpacity key={data}>
                            {/* {TODO: Mejorar nombres, colores y poner imagenes */}
                            <Categoria nombre={categorias[data].titulo} color={categorias[data].color} id={categorias[data].id} />
                        </TouchableOpacity>
                    )})
                } 
            </ScrollView> 
                


            </View>
		</SafeAreaView>
	);
};