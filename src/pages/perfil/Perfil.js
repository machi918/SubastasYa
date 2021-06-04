import React,{useEffect,useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading/Loading'

export default function Perfil({navigation}){
    const [userData, setuserData] = useState({});
    const [color, setColor] = useState('');
    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);

    useEffect(async() => {
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = JSON.parse(jsonValue);
        if(data === undefined){
            console.log('Error en la carga del perfil');
        }else{
            setuserData(data)
            handleColor();
            setBusy(false)
        }
    }, [reload])

    // useEffect(async() => {
    //     try {
    //         await getData().then(()=>handleColor(userData.categoria));
    //         setBusy(false)
    //     } catch (error) {
            
    //     }

        
    // }, [reload])

    // const getData = async() =>{
    //     const data = await AsyncStorage.getItem('userData');
    //     const jsonData = JSON.parse(data);
    //     setuserData(jsonData)
    // }

    const handleColor = async () => {
        switch(userData.categoria){
            case 'comun':
                setColor('#81421F');
                break;
            case 'especial':
                setColor('#8D008F');
                break;
            case 'plata':
                setColor('#E8E8E8');
                break;
            case 'oro':
                setColor('#ECE303');
                break;
            case 'platino':
                setColor('#62FD84');
                break;
        }
    }

	return (
		<SafeAreaView style={styles.container}>
            {(busy) ? <Loading/> : null }
            {(busy) ? <Loading/> : null }

            <View style={styles.header}>
                <Text style={styles.headerText}>Perfil</Text>
            </View>
            <View style={styles.subHeader}>
                <Image source={{uri:userData.fotoRapida}} style={{resizeMode:'cover', height:170, width: 170,zIndex:100, borderColor: color, borderWidth:4, borderRadius:100}}></Image>
                <Text style={styles.subHeaderName}>{userData.nombre}</Text>
                <Text style={styles.subHeaderDivision}>Division {userData.categoria}</Text>
            </View>
            <View style={styles.main}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('EditarPerfil')}>
                    <Text style={styles.buttonText}>Editar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('MisMediosPago')}>
                    <Text style={styles.buttonText}>Mis Medios de Pago</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('MisEstadisticas')}>
                    <Text style={styles.buttonText}>Mis Estadísticas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapperLogOut} onPress={()=>navigation.navigate('InicioSesion')}>
                    <Text style={styles.buttonTextLogOut}>Cerrar Sesión</Text>
                </TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};