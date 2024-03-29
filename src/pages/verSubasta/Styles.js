import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
	},
	header: {
        paddingLeft:20,
        width:'100%',
        height:'25%',
        justifyContent:'center',
        alignItems:'flex-start',
        borderBottomColor:'#4FAFE5',
        borderBottomWidth: 2,
        marginBottom:10
	},
	main: {
        marginTop:10,
        width:'90%',
        height:'65%',
	},
    headerText:{
        fontSize:18,
    },
    mainText:{
        fontSize:25,
    }
});

export default styles;