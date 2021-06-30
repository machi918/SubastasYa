import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
	},
    scroll:{
        width: '100%',
        borderBottomColor:'black',
        borderBottomWidth:2,
    },
    input:{
        alignSelf:'center',
        width:'90%',
        borderColor:'black',
        borderWidth:2,
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10,
    },
    subTitle:{
        marginTop:10,
        paddingLeft:15
    },
    addButton:{
        borderColor: '#4FAFE5',
        backgroundColor:'#4FAFE5',
        borderWidth: 2,
        width:'90%',
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10
    },
    textoAddButton:{
        color:'white'
    },
    fotos:{
        alignItems:'center',
        width:'100%',
        marginTop:10,
        height:50,
    },
    extra:{
        fontSize:20,
        marginTop:10,
        paddingLeft:15
    },
    addFoto:{
        height:'100%',
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 5,
        borderColor: '#4FAFE5',
        borderWidth: 2,
    },
    subTitleButton:{

    }
});

export default styles;