import React,{useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {addFotoPersona} from '../../controllers/UsersController'


export default function EditarPerfil({navigation, route}){

    const {user} = route.params;
    const [imagenURI,setImagenURI] = useState('https://www.parramattacameras.com.au/media/catalog/product/cache/aef55d64a8ced0a8bc0aa5d7aca8278a/c/a/canon_eos_m50_mirrorless_digital_camera_with_15-45mm_lens_black_4.jpg');

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

    const handleOnPress= async ()=> {
        const fotoData = {
            idProducto: aux,
            url: auxURL
        };
    }


    //-------------------------MANEJO DE PERMISOS----------------------
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
    //-------------------------------------------------------------------------

    //---------------------SACAR UNA FOTO DE LA CAMARA-------------------------
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
    //----------------------------------------------------------------------

    //----------------------------SACAR FOTO DE LIBRERIA--------------------
    const openGallery = () => {
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
        
        launchImageLibrary(options, response => {
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
    }
    //----------------------------------------------------------------------

    const handleFetch =async ()=>{
        let data={
            user: user,
            imagenURI: imagenURI,
        }
        const response = await addFotoPersona(data);
        navigation.navigate('HomeMain');
    }

	return (
		<SafeAreaView style={styles.container}>

            {/* TODO -> LINEA QUE DIVIDE AL HEADER EDITARPERFIl */}

            <View style={styles.subHeader}>
                <TouchableOpacity style={styles.buttonWrapper1} onPress={()=>openGallery()}>
                    <Text style={styles.buttonText}>Actualizar foto de perfil desde galeria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper1} onPress={()=>openCamara()}>
                    <Text style={styles.buttonText}>Actualizar foto de perfil desde Camara</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.subHeaderText}>Sólo rellenar los campos que desea modificar</Text>

            <View style={styles.main}>
 
                <TextInput style={styles.input} placeholder={'Teléfono'}></TextInput>
                <TextInput style={styles.input} placeholder={'Domicilio'}></TextInput>
                <TextInput style={styles.input} placeholder={'Contraseña'}></TextInput>
                <TextInput style={styles.input} placeholder={'Email'}></TextInput>

                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>handleFetch()}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                </TouchableOpacity>


            </View>
		</SafeAreaView>
	);
};