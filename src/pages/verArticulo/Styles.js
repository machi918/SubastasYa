import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		height:'100%',
        alignItems:'center',
        backgroundColor:'#FFFFFF'
	},
	header: {
        width:'100%',
        height:'25%',
        justifyContent:'center',
        alignItems:'flex-start',
        borderBottomColor:'#4FAFE5',
        borderBottomWidth: 2,
	},
    subheader:{
        width:'100%',
        borderBottomColor:'#4FAFE5',
        borderBottomWidth: 2,
    },
    subheaderText:{

    },
    info:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomColor:'#4FAFE5',
        borderBottomWidth: 2,
        width:'100%'
    },
    infoText:{
        

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