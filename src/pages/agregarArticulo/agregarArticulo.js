import React,{useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, ScrollView, PermissionsAndroid} from 'react-native';
import styles from './Styles';
import Loading from '../../components/Loading/Loading'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {addProduct, addFotoProducto, addItemCatalogo} from '../../controllers/ArticulosController'

export default function agregarArticulo({navigation, route}){

    //TODO, MANEJO DE LA LIBRERIA DE FOTOS. QUE TE DEJE SELECCIONAR LA FOTO

    const {idDuenio} = route.params;

    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
    const [nombreArticulo, setNombreArticulo] = useState(' ');
    const [precio, setPrecio] = useState(0);
    const [miniDesc, setMiniDesc] = useState(' ');
    const [allDesc, setAllDesc] = useState(' ');
    const [nombreAutor, setNombreAutor] = useState(' ');
    const [fechaArticulo, setFechaArticulo] = useState(' ');
    const [imagenURI,setImagenURI] = useState('https://www.parramattacameras.com.au/media/catalog/product/cache/aef55d64a8ced0a8bc0aa5d7aca8278a/c/a/canon_eos_m50_mirrorless_digital_camera_with_15-45mm_lens_black_4.jpg');
    const [productoID,setProductID] = useState(0);

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

    const handleOnPress= async ()=> {
        let data={
            fecha: null,
            titulo:nombreArticulo,
            miniDesc:miniDesc,
            allDesc: allDesc,
            revisor: 1,
            duenio: idDuenio,
            precio: precio,
        }
        const response = await addProduct(data);
        if(response != undefined){
            let aux = (response.recordset[0].producto)
            let auxURL = imagenURI.slice(84,imagenURI.length-4);
            setProductID(response.recordset[0].producto)
            const fotoData = {
                    idProducto: aux,
                    url: auxURL
            };
            const response2 = await addFotoProducto(fotoData);
            const response3 = await addItemCatalogo(aux);
            navigation.goBack();
        }
    }
    
    function clearText(){
        setNombreArticulo('');
        setPrecio(0);
        setMiniDesc('');
        setAllDesc('');
        setNombreAutor('');
        setFechaArticulo('');
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

    //-------------------------------RENDER---------------------------------
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

                    <Text style={styles.subTitle}>Foto: </Text>
                    <Image style={{marginTop:10,
                        height:100, 
                        width:100, 
                        borderRadius:100, 
                        borderWidth:2, 
                        borderColor:'black',
                        backgroundColor:'red',
                        alignSelf:'center'}}
                        source={{uri: imagenURI}}
                        ></Image>
                    <View style={styles.fotos}>
                        <TouchableOpacity style={styles.addFoto} onPress={()=>openCamara()}>
                            <Text style={styles.subTitleButton}>Subir foto</Text>
                        </TouchableOpacity>
                    </View>                    
                    <View style={styles.fotos}>
                        <TouchableOpacity style={styles.addFoto} onPress={()=>openGallery()}>
                            <Text style={styles.subTitleButton}>Elegir foto</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.subTitle}> </Text>

            </ScrollView>

            <TouchableOpacity style={styles.addButton}
            onPress={()=>handleOnPress()}>
                <Text style={styles.textoAddButton}>Agregar</Text>
            </TouchableOpacity>
		</SafeAreaView>
	);
};