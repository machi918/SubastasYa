import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
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
        height:'60%',
        alignItems:'center',
        justifyContent:'center',
	},
    contentWrapper:{
        height:'80%',
        width:'85%',
        backgroundColor:'violet',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 25,
        backgroundColor:'#4497E3'
    },
	buttonWrapper: {
        marginTop: 20,
        height:'15%',
		width:'90%',
        backgroundColor:'#2F80ED',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
	},
    buttonText: {
		fontSize: 20,
		fontWeight: '400',
        color:'#FFFFFF'
	},
	text: {
        marginBottom: 10,
        fontSize:24,
        height:'60%',
        paddingRight:20,
        paddingLeft:20,
        color:'#FFFFFF'
	},
});

export default styles;