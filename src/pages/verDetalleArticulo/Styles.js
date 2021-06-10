import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
	},
	header: {
        width:'100%',
        height:'15%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#4FAFE5',
        borderBottomWidth: 2,
	},
	main: {
        marginTop:10,
        width:'90%',
        height:'60%',
        marginBottom: 15,
        borderColor:'black',
        borderWidth:2,
        padding: 5,
        borderRadius: 5
	},
    headerText:{
        fontSize:26,
    },
    mainText:{
        fontSize:20,
    },
    button:{
        borderColor: '#4CACE2',
        marginBottom:12,
        borderWidth: 2,
        width:'90%',
        // height:80,
        height:'10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#4FAFE5',
    },
    buttonText:{
        color: 'white',
        fontSize: 20
    }
});

export default styles;