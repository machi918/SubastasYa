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
		borderRadius:7,
        width:'90%',
        color:'#000000',
    },
    inputCorto: {
        paddingLeft:10,
		borderRadius:7,
        margin:12,
        borderColor:'gray',
        borderWidth:2,
        width:'25%',
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
		width: '90%'
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
    buttonWrapperLogOut:{
        marginTop:25,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
        height:'10%',
        width:'90%',
        borderBottomColor:'#EB5757',
        borderBottomWidth:2,
    },
    buttonTextLogOut:{
        color:'#EB5757'
    },
    wrapper:{
        justifyContent:'center',
        paddingLeft:15,
        height:'10%',
        width:'90%',
        borderBottomColor:'rgba(33, 33, 33, 0.08)',
        borderBottomWidth:2
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
	buttonModal: {
		backgroundColor: '#2F80ED',
		borderWidth: 0.5,
		borderColor: 'gray',
		width: '80%',
		borderRadius: 10,
        alignItems:'center',
	},
	modalHeaderText: {
		fontSize: 24,
        alignSelf: 'center'
	}
});

export default styles;