import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
		width:'100%'
	},
	dataContainer:{
		height:'25%',
		width:'100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent:'space-around',
		alignItems:'center',
		borderBottomColor:'black',
		borderBottomWidth: 3,
	},
	data:{
		marginTop: 20,
		height:'40%',
		width:'40%',
		alignItems:'center',
		justifyContent:'center',
	},
	infoText:{
		fontSize: 14,
		color:'black',
	},
	dataText:{
		fontSize: 24,
		color:'black',
	},
	bar:{
		width:'90%'

	},
	pie:{
		width:'90%'
	}
});

export default styles;