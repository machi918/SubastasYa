import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
	},
    topHeader:{
        
    },
	header: {
        width:'100%',
        height:'10%',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#4FAFE5',
        borderBottomWidth: 2,
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10
	},
    headerText:{
        fontSize:20,
    },
	main: {
        marginTop:25,
        width:'90%',
        height:'90%',
	},
    icono:{
        fontSize:30,
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
        width:'90%'
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