import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        backgroundColor:'#FFFFFF'
	},
	header: {
        width:'100%',
        height:'40%',
        justifyContent:'center',
        alignItems:'center'
	},
    logo: {
        resizeMode:'cover',
        width:'80%',
        height:'85%',
	},
	main: {
        paddingTop: 20,
        height:'60%',
        alignItems:'center',
        flexDirection:'column'
	},
	buttonWrapper: {
        marginBottom: 20,
        height:'10%',
		width:'90%',
        backgroundColor:'#2F80ED',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
	},
    buttonText: {
		fontSize: 18,
		fontWeight: '400',
        color:'#FFFFFF'
	},
    invitadoButton: {
        height:'10%',
        marginTop: 40,
		width:'90%',
        backgroundColor:'#2F80ED',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
	},
    input: {
        paddingLeft:10,
        marginBottom:12,
        borderColor:'grey',
        borderWidth:2,
        width:'90%',
        color:'#000000'
    }
});

export default styles;