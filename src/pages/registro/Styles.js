import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
	},
	header: {
        width:'100%',
        height:'30%',
        justifyContent:'center',
        alignItems:'center',
	},
    logo: {
        resizeMode:'cover',
        width:'50%',
        height:'70%',
	},
	main: {
        height:'70%',
        alignItems:'center',
        flexDirection:'column'
	},
	buttonWrapper: {
        marginTop: 20,
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