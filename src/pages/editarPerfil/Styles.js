import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
	},
    headerText:{
        fontSize:20,
    },
    subHeader:{
        justifyContent:'center',
        height:'35%',
        alignItems: 'center',
        borderBottomColor: '#4FAFE5',
        borderBottomWidth: 2,
    },
    logo:{
        resizeMode:'contain',
        height:'80%',
    },
    subHeaderText:{
        textAlign:'center',
        width:'80%',
        fontSize:18,
        color:'#969799'
    },
    main: {
        width:'100%',
        height:'100%',
        alignItems:'center',
	},
    input:{
        paddingLeft:10,
        marginTop:12,
        borderColor:'grey',
        borderWidth:2,
        width:'90%',
        color:'#000000'

    },
    buttonWrapper:{
        marginTop:35,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
        height:'8%',
        width:'90%',
        backgroundColor:'#2F80ED'
    },
    buttonText:{
        color:'#FFFFFF',
        fontSize: 18
    }
});

export default styles;