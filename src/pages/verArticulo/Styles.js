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
        justifyContent:'center',
        alignItems:'center',
        height:'5%'
    },
    subheaderText:{
        fontSize: 20
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomColor:'#4FAFE5',
        borderBottomWidth: 2,
        width:'100%',
        height:'5%'
    },
    infoText:{
        fontSize: 20
    },
	main: {
        marginTop:10,
        width:'90%',
        height:'40%',
        marginBottom: 15,
        borderColor:'black',
        borderWidth:2,
        padding: 5,
        borderRadius: 5
	},
    headerText:{
        fontSize:18,
    },
    mainText:{
        fontSize:20,
    },
    buttonDetail:{
        borderColor: '#4CACE2',
        borderWidth: 2,
        width:'90%',
        height:'7%',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonDetailText:{
        fontSize: 20
    },
    buttonOffer:{
        borderColor: '#4CACE2',
        borderWidth: 2,
        width:'90%',
        height:'7%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#4FAFE5'
    },
    buttonOfferText:{
        color: 'white',
        fontSize: 20
        
    }
});

export default styles;