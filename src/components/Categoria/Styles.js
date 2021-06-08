import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
		height:160,
        width:160,
        alignItems:'center',
        marginBottom:40,
        borderColor:'#000000',
        borderWidth:2,
        borderRadius:20,
        justifyContent:'center'
	},
	header: {
        width:'100%',
        height:'30%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#9E9E9E',
        borderBottomWidth: 2,
	},
    headerText:{
        fontSize:20,
    },
    main:{
        height:'70%',
        justifyContent:'center',
        alignItems:'center'
    },
    icono:{
        fontSize:50,
    },
});

export default styles;