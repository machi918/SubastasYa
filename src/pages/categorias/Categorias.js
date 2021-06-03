import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Categoria from '../../components/Categoria/Categoria';
import {categorias} from '../../assets/Categorias/CategoriasData';

export default function Categorias(){
    console.log(categorias);
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
                        <TouchableOpacity>
                            {console.log(categorias[data])}
                            //TODO: Poner nombre y color a los catalogos
                            <Categoria/>
                        </TouchableOpacity>
                    )})
                } 
                {/* <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/> */}
            </ScrollView> 
                


            </View>
		</SafeAreaView>
	);
};