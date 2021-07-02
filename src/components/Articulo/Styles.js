import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:200,
        alignItems:'center',
        marginBottom:40,
        borderColor:'#000000',
        borderWidth:2,
        borderRadius:20,
	},
	header: {
        width:'100%',
        height:'30%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#9E9E9E',
        borderBottomWidth: 2,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
	},
    headerText:{
        fontSize:20,
    },
    subHeader:{
        height:'60%',
        alignItems: 'center',
        width:'100%'
    },
    image:{
        // resizeMode:'contain',
        // height:'100%',
        marginTop:4,
        resizeMode:'contain',
        height:'90%',
        width:'100%'
    },
    subHeaderName:{
        fontSize:20,

    },
    subHeaderDivision:{
        fontSize: 16,
    },
    bottomText:{
        fontSize:16,
        color:'#FFFFFF'

    }
});

export default styles;