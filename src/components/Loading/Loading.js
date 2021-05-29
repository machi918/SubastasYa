import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import {useState,useEffect} from 'react';
import React, {useEffect} from 'react'
import LottieView from 'lottie-react-native';


const LoadingPage = ({navigation})=>{

    useEffect(() => {
		const timer = setTimeout(() => {
            navigation.navigate('Inicio Sesion')
        }, 2000);
		return () => clearTimeout(timer);
	}, []);

    return(
		<View style={styles.container}>
        <LottieView source={require('../assets/logoAnimation.json')} autoPlay loop></LottieView>
		</View>
    )
}

export default LoadingPage;
