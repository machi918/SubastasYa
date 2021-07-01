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
        width:'100%',
        height:'48%',
	},
	image:{
		resizeMode: 'contain',
		height:200,
		marginBottom:10,
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
        width:'90%',
		justifyContent:'center'
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
	buttonExit:{
		height: 50,
		width:'70%',
		backgroundColor:'red',
		alignItems:'center',
		justifyContent:'center',
		borderRadius:5
	},
	buttonExitText:{
		color:'#FFFFFF',
		fontSize:16
	},
	titleText:{
		width:'90%',
		textAlign:'center',
		fontSize:16,
		marginBottom:10
	},
	subtitleText:{
		width:'90%',
		textAlign:'center',
		fontSize:13,
		color:'#969799',
		marginBottom:10
	},
	subastasSub:{
		borderTopColor:'#4FAFE5',
		borderTopWidth:2,
		width:'100%',
		borderBottomColor:'#4FAFE5',
		borderBottomWidth:2,
		paddingBottom:5,
		alignItems:'center'
	},
	subastaSubTitle:{
		marginTop:5,
		fontSize:15
	},
	submain:{
		borderTopColor:'#4FAFE5',
		borderTopWidth:2,
		width:'100%',
		borderBottomColor:'#4FAFE5',
		borderBottomWidth:2,
		paddingBottom:5,
		alignItems:'center'
	},
	submainText:{
		width:'100%',
		flexDirection:'row',
		justifyContent:'space-evenly'
	},
	subasta:{
		width:'100%',
		borderBottomColor:'#000000',
		borderBottomWidth:1,
		backgroundColor:'#FFFFFF'
	},
	oferta:{
		height:30,
	},
	footer:{
		marginTop:5,
		width:'100%',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-evenly',
		marginBottom:5
	},
	roundedButton:{
		backgroundColor:'#4FAFE5',
		width:70,
		height:70,
		borderRadius:100,
		justifyContent:'center',
		alignItems:'center',
		//Sombra----
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,
		elevation: 8,
		//----------
	},
	roundedButtonText:{
		color: '#FFFFFF',
		fontSize:48
	},
	input:{
		width:'60%',
		borderColor:'#000000',
		borderWidth: 1,
		borderRadius:5,
		paddingLeft:10,
		paddingRight:10
	},
	pago:{
		flexDirection:'row',
		width:'100%',
		justifyContent:'space-evenly',
		backgroundColor: '#4FAFE5',
		borderRadius:10,
		marginTop:10,
		height:40,
		alignItems:'center'
	},
	fontModalTitle: {
		fontSize: 36
	}
});

export default styles;