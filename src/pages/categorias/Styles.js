import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center'
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
        marginTop:12,
        width:'90%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#123123'
	},
    headerText:{
        fontSize:20,
    }
});

export default styles;