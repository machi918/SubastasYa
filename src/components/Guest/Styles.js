import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
		height:200,
        width:'100%',
        alignItems:'center',
        borderColor:'#000000',
        borderWidth:2,
        borderRadius:20,
        justifyContent:'center',
        position: 'absolute',
        top:'30%',
        backgroundColor:'#FFFFFF',
	},
	header: {
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
	},
    headerText:{
        fontSize:20,
        textAlign:'center'
    },
    main:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        height: 40,
        marginTop:10,
        width:'70%',
        color: 'white',
        backgroundColor:'#2F80ED',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#FFFFFF',
        fontSize: 18,
    }
});

export default styles;