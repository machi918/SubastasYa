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
            setBusy(false);

        }

    }, [reload])

    const handleColor = () => {
        switch(userData.categoria){
            case 'comun':
                console.log('ENTRE');
                setColor('#81421F');
                setBusy(false);
                break;
                // return '#81421F'
            case 'especial':
                console.log('ENTRE');
                setColor('#8D008F');
                setBusy(false);
                break;
                // return '#8D008F'
            case 'plata':
                console.log('ENTRE');

                setColor('#E8E8E8');
                setBusy(false);
                break;
                // return '#E8E8E8'
            case 'oro':
                console.log('ENTRE');

                setColor('#ECE303');
                setBusy(false);
                break;
                // return '#ECE303'
            case 'platino':
                console.log('ENTRE');

                setColor('#62FD84');
                setBusy(false);
                break;
                // return '#62FD84'
        }
    }

	return (
		<SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Perfil</Text>
            </View>
            <View style={styles.subHeader}>
                <Image source={require('../../assets/Images/perfil2.jpg')} style={styles.logo}></Image>
                {busy ? <Loading/> : null }
                <View style={{backgroundColor:color ,width: 170,height: 170, borderRadius:100, position:'absolute', zIndex:100 }}></View>
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