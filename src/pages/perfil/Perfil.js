import React,{useEffect,useState} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../../components/Loading/Loading';
import Guest from '../../components/Guest/Guest';

export default function Perfil({navigation}){
    const [userData, setuserData] = useState({});
    const [color, setColor] = useState('#81421F');
    const [busy,setBusy] = useState(true);
    const [reload,setReload] = useState(true);
    const [guest, setGuest] = useState(false);

    useEffect(async() => {
        const jsonValue = await AsyncStorage.getItem('userData');
        const data = await JSON.parse(jsonValue);
        if(data != undefined || data != null){
            const auxColor = handleColor(data.categoria);
            if(color === undefined){
                console.log('Error en el color');
            }else{
                setuserData(data);
                setColor(auxColor);
                setBusy(false)
            }
        }else{
            setGuest(true);
            setBusy(false);
            console.log('Error en la carga del perfil');
        }
    }, [reload])

    const removeValue = async () => {
        try {
            await AsyncStorage.removeItem('userData')
        } catch(e) {
          // remove error
            console.log('ERROR PERRITO MALVADO: '+e);
        }
        console.log('Usuario removido del Async Storage.')
    }

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

    const handleLogOut = async () =>{
        await removeValue();
        navigation.navigate('InicioSesion');
    }

	return (
		<SafeAreaView style={styles.container} >
            {(busy) ? <Loading/> : null }
            {guest ? <Guest/> : null }
            <View style={styles.header} >
                <Text style={styles.headerText}>Perfil</Text>
            </View>
            <View style={styles.subHeader}>
                <Image source={{uri:userData.fotoRapida}} style={{resizeMode:'cover', height:170, width: 170,zIndex:100, borderColor: color, borderWidth:4, borderRadius:100}}></Image>
                <Text style={styles.subHeaderName}>{userData.nombre}</Text>
                <Text style={styles.subHeaderDivision}>Division {userData.categoria}</Text>
            </View>
            <View style={styles.main}>
                {/* {guest ? <Guest/> : null } */}
                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('EditarPerfil')}>
                    <Text style={styles.buttonText}>Editar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('MisMediosPago')}>
                    <Text style={styles.buttonText}>Mis Medios de Pago</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapper} onPress={()=>navigation.navigate('MisEstadisticas')}>
                    <Text style={styles.buttonText}>Mis Estadísticas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonWrapperLogOut} onPress={()=>handleLogOut()}>
                    <Text style={styles.buttonTextLogOut}>Cerrar Sesión</Text>
                </TouchableOpacity>

            </View>
		</SafeAreaView>
	);
};