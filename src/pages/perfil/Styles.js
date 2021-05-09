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
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#4FAFE5',
        borderBottomWidth: 2
	},
    headerText:{
        fontSize:20,
    },
    subHeader:{
        marginTop:15,
        height:'35%',
        alignItems: 'center',
        borderBottomColor: '#4FAFE5',
        borderBottomWidth: 2,
        paddingBottom:15
    },
    logo:{
        resizeMode:'contain',
        height:'80%',
    },
    subHeaderName:{
        fontSize:20,

    },
    subHeaderDivision:{
        fontSize: 16,

    },
    main: {
        width:'100%',
        height:'100%',
        alignItems:'center',
	},
    buttonWrapper:{
        justifyContent:'center',
        paddingLeft:15,
        height:'10%',
        width:'90%',
        borderBottomColor:'rgba(33, 33, 33, 0.08)',
        borderBottomWidth:2
    },
    buttonText:{

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
    }
});

export default styles;