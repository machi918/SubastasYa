import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage';
import verDetalle from '../../pages/verDetalleArticulo/verDetalle'

export default function agregarArticulo({navigation, route}){

    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
    const [nombreArticulo, setNombreArticulo] = useState('');
    const [precio, setPrecio] = useState(0);
    const [miniDesc, setMiniDesc] = useState('');
    const [allDesc, setAllDesc] = useState('');
    const [nombreAutor, setNombreAutor] = useState('');
    const [fechaArticulo, setFechaArticulo] = useState('');

    useEffect(async() => {

        setBusy(false)

        },[reload])


    function handleOnPress(){

    }
    
    function clearText(){
        setNombreArticulo('');
        setPrecio(0);
        setMiniDesc('');
        setAllDesc('');
        setNombreAutor('');
        setFechaArticulo('');
    }

	return (
		<SafeAreaView style={styles.container}>
            {busy ? <Loading/> : null }
            <ScrollView style={styles.scroll}>
                    <Text style={styles.subTitle}>Nombre del Articulo: </Text>
                    <TextInput
                    style={styles.input}
                    keyboardType={'default'}
                    onChangeText={(text)=>setNombreArticulo(text)}
                    ></TextInput>

                    <Text style={styles.subTitle}>Descripcion breve: </Text>
                    <TextInput
                    style={styles.input}
                    keyboardType={'default'}
                    onChangeText={(text)=>setMiniDesc(text)}
                    multiline={true}
                    numberOfLines={4}
                    maxLength={180}
                    ></TextInput>

                    <Text style={styles.subTitle}>Precio base: </Text>
                    <TextInput
                    style={styles.input}
                    keyboardType={'numeric'}
                    placeholder={'$'}
                    onChangeText={(text)=>setPrecio(parseInt(text))}
                    ></TextInput>

                    <View style={styles.fotos}>
                        <Text style={styles.subTitle}>Fotos: </Text>
                    </View>

                    <Text style={styles.extra}>Extras: </Text>

                    <Text style={styles.subTitle}>Nombre del Autor: </Text>
                    <TextInput
                    style={styles.input}
                    keyboardType={'default'}
                    onChangeText={(text)=>setNombreAutor(text)}
                    maxLength={45}
                    ></TextInput>

                    <Text style={styles.subTitle}>Fecha de creación: </Text>
                    <TextInput
                    style={styles.input}
                    keyboardType={'default'}
                    onChangeText={(text)=>setFechaArticulo(text)}
                    ></TextInput>
                    
                    <Text style={styles.subTitle}>Historia y curiosidades: </Text>
                    <TextInput
                    style={styles.input}
                    keyboardType={'default'}
                    onChangeText={(text)=>setAllDesc(text)}
                    multiline={true}
                    numberOfLines={8}
                    maxLength={180}
                    ></TextInput>
                    <Text style={styles.subTitle}> </Text>

            </ScrollView>

            <TouchableOpacity style={styles.addButton}
            onPress={()=>handleOnPress()}>
                <Text style={styles.textoAddButton}>Agregar</Text>
            </TouchableOpacity>
		</SafeAreaView>
	);
};