import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Catalogo from '../../components/Catalogo/Catalogo'

export default function Home(){
	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Home</Text>
            </View>
            <View style={styles.main}>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
                <Catalogo/>
            </ScrollView> 
            </View>
		</SafeAreaView>
	);
};