import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Categoria from '../../components/Categoria/Categoria'

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
                <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/>
            </ScrollView> 
                


            </View>
		</SafeAreaView>
	);
};