import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';

export default function MisMediosPago({navigation}){
	return (
		<SafeAreaView style={styles.container}>

            {/* TODO -> LINEA QUE DIVIDE AL HEADER EDITARPERFIl */}
			<View styles={styles.main}>
            <Text style={styles.subHeaderText}>Mis medios de pago</Text>

				<ScrollView>

				</ScrollView>
			</View>


			<TouchableOpacity style={styles.roundedButton}>
				<Text style={styles.roundedButtonText}>+</Text>
			</TouchableOpacity>
			

		</SafeAreaView>
	);
};