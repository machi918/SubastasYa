import React,{useEffect,useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading/Loading'

export default function Perfil({navigation}){
    const [userData, setuserData] = useState({});
    const [color, setColor] = useState('#81421F');
    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);

    useEffect(async() => {
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = await JSON.parse(jsonValue);
        const auxColor = handleColor(data.categoria);
        if(data === undefined || color=== undefined){
            console.log('Error en la carga del perfil');
        }else{
            setuserData(data);
            setColor(auxColor);
            setBusy(false)
        }
    }, [reload])

    function handleColor(cat){
        switch(cat){
            case 'comun':
                return '#81421F'
            case 'especial':
                return '#8D008F'
            case 'plata':
                return '#E8E8E8'
            case 'oro':
                return '#ECE303'
            case 'platino':
                return '#62FD84'
        }
    }

	return (
		<SafeAreaView style={styles.container}>
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