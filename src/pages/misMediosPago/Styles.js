import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
	},
	main:{
		height:'100%'
	},
	roundedButton:{
		position: 'absolute',
		bottom: 30,
		right:30,
		backgroundColor:'#4FAFE5',
		width:100,
		height:100,
		borderRadius:100,
		justifyContent:'center',
		alignItems:'center'
	},
	roundedButtonText:{
		color: '#FFFFFF',
		fontSize:50
	}
});

export default styles;