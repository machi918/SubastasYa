import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:150,
        // height:'100%',
        alignItems:'center',
        marginBottom:40,
        borderColor:'#000000',
        borderWidth:2
	},
	header: {
        width:'100%',
        height:'30%',
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:'#9E9E9E',
        borderBottomColor:'#9E9E9E',
        borderBottomWidth: 2,
        paddingLeft: 20
	},
    headerText:{
        fontSize:24,
    },
    main:{
        flexDirection:'row',
        height:'70%'
    },
    image:{
        resizeMode:'contain',
        width:'50%',
        height:'100%'
    },
    color:{
        backgroundColor:'violet',
        width:'50%'
    }
});

export default styles;