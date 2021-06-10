import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Categoria from '../../components/Categoria/Categoria';
import {categorias} from '../../assets/Categorias/CategoriasData';

export default function Categorias({navigation}){

    const handleOnPress = (cat)=>{
        navigation.navigate('verSubastasCat',{categoria: cat});
    }

	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Categorías</Text>
            </View>
            <View style={styles.main}>
            <ScrollView contentContainerStyle={{flexDirection: "row", flexWrap: "wrap", justifyContent:'space-around'}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                {categorias.map((key, data ) =>{
                    return(
                        <TouchableOpacity key={data} onPress={()=>handleOnPress(categorias[data].titulo)}>
                            <Categoria nombre={categorias[data].titulo} color={categorias[data].color} id={categorias[data].id} foto={categorias[data].foto} icono={categorias[data].icono}  />
                        </TouchableOpacity>
                    )})
                } 
            </ScrollView>
            </View>
		</SafeAreaView>
	);
};