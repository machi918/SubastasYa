import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView, PermissionsAndroid} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage';
import verDetalle from '../../pages/verDetalleArticulo/verDetalle'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function agregarArticulo({navigation, route}){

    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
    const [nombreArticulo, setNombreArticulo] = useState('');
    const [precio, setPrecio] = useState(0);
    const [miniDesc, setMiniDesc] = useState('');
    const [allDesc, setAllDesc] = useState('');
    const [nombreAutor, setNombreAutor] = useState('');
    const [fechaArticulo, setFechaArticulo] = useState('');
    const [imagenURI,setImagenURI] = useState('');

    useEffect(async() => {

        setBusy(false)

    },[reload])

    const cloudinaryUpload = (photo) => {
        const data = new FormData()
        data.append('file', photo)
        data.append('upload_preset', 'Godioo')
        data.append("cloud_name", "disfran")
        fetch("https://api.cloudinary.com/v1_1/disfran/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).
            then(data => {
                console.log(data.url)
                setImagenURI(data.url)
            }).catch(err => {
                console.log(err);
            })
    }

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

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,{
                title: "App Camera Permission",
                message:"App needs access to your camera ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
        console.warn(err);
        }
    };

    const openCamara = () => {
        requestCameraPermission()
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
                quality:0,
                maxWidth: 500,
                maxHeight: 900,
            },
            includeBase64: true,
        };
        
        launchCamera(options, response => {
            if (response.didCancel) {
            console.log("User cancelled image picker");
            } else if (response.error) {
            console.log("ImagePicker Error: ", response.error);
            } else {
            const uri = response.assets[0].uri;
            const type = response.assets[0].type;
            const name = response.assets[0].fileName;
            const source = {
                uri,
                type,
                name,
            }
            cloudinaryUpload(source)
            }
        });
    };

    function handleLibrary(){

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

                    <Image style={{height:100, 
                        width:100, 
                        borderRadius:100, 
                        borderWidth:2, 
                        borderColor:'black',
                        backgroundColor:'red',
                        alignSelf:'center'}}
                        source={{uri: imagenURI}}
                        ></Image>


                    <View style={styles.fotos}>
                        <Text style={styles.subTitle}>Fotos: </Text>
                        <TouchableOpacity onPress={()=>openCamara()}>
                            <Text style={styles.subTitle}>Subir foto</Text>
                        </TouchableOpacity>
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