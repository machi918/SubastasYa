import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
	},
	input: {
        paddingLeft:10,
        margin: 12,
        borderColor:'gray',
        borderWidth:2,
        width:'90%',
        color:'#000000',
    },
    inputCorto: {
        paddingLeft:10,
        margin:12,
        borderColor:'gray',
        borderWidth:2,
        width:'30%',
        color:'#000000',
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
});

export default styles;