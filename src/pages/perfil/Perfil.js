import React,{useEffect,useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil({navigation}){
    const [userData, setuserData] = useState({});
    const [color, setColor] = useState('');
    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);

    useEffect(async() => {
        try {
            const jsonValue = await AsyncStorage.getItem('userData')
            setuserData(JSON.parse(jsonValue))
            handleColor();
            setBusy(false);
        } catch(e) {
            console.log(e);
              // error reading value
        }
    }, [])

    // useEffect(async() => {
    //     try {
    //         await handleUserData();
    //     } catch(e) {
    //           // error reading value
    //     }
    // }, [])

    // const handleUserData = async ()=>{
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('userData')
    //         setuserData(JSON.parse(jsonValue))
    //         handleColor();
    //     } catch(e) {
    //     }
    // }

    const handleColor = () => {
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
            <View style={styles.header}>
                <Text style={styles.headerText}>Perfil</Text>
            </View>

            <View style={styles.subHeader}>
                <Image source={require('../../assets/Images/perfil2.jpg')} style={styles.logo}></Image>
                <View style={{backgroundColor:color ,width:170,height:170, borderRadius:100, position:'absolute' }}></View>
                {/* POR QUE NO SE ACTUALIZ EN EL MOMENTO LPMMMM */}
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