import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:200,
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
        alignItems:'center',
        backgroundColor:'#9E9E9E',
        borderBottomColor:'#9E9E9E',
        borderBottomWidth: 2
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
        marginTop:4,
        resizeMode:'contain',
        height:'90%',
        width:'100%',
        zIndex: 100000
    },
    subHeaderName:{
        fontSize:20,

    },
    subHeaderDivision:{
        fontSize: 16,

    },
    footer: {
        backgroundColor:'#C4C4C4',
        width:'100%',
        height:'10%',
        alignItems:'center',
	},
    bottomText:{

    }
});

export default styles;