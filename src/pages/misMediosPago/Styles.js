import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
	},
	main:{
		height:'100%',
		
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
		alignItems:'center',
		zIndex: 100,
	},
	roundedButtonText:{
		color: '#FFFFFF',
		fontSize: 50
	},
	modalGeneric: {
		flex: 1,
		backgroundColor:'rgba(1,1,1,0.3)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalView: {
		borderWidth: 1,
		borderRadius: 25,
		backgroundColor: 'white',
		alignItems: 'center',
		padding: 25,
	},
	icons: {
		height: 75,
		width: 75,
		marginHorizontal: 50
	},
	modalButton: {
		position: 'absolute',
		right: 15,
		top: 15,
		height: 25,
		width: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalButtonText :{
		color: 'gray',
		fontSize: 20
	},
});

export default styles;