import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
	},
	header: {
        width:'100%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#4FAFE5',
        borderBottomWidth: 2
	},
	main: {
        marginTop:25,
        width:'90%',
        height:'90%',
	},
    headerText:{
        fontSize:20,
    },roundedButton:{
		position: 'absolute',
		bottom: 40,
		right:10,
		backgroundColor:'#4FAFE5',
		width:90,
		height:90,
		borderRadius:100,
		justifyContent:'center',
		alignItems:'center'
	},
	roundedButtonText:{
		color: '#FFFFFF',
		fontSize:48
	}
});

export default styles;