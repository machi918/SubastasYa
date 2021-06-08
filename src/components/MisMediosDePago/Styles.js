import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container: {
        backgroundColor: "#09004d",
        borderRadius: 10,
        marginTop: 10,
        padding: 5,
        borderWidth: 5
    },
    bankContainer: {
        backgroundColor: "#006346",
        borderRadius: 10,
        borderWidth: 3,
        marginTop: 10,
        padding: 5
    },
    cardText: {
        color: 'white',
        fontSize: 20,
    },
    cardIco: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
        marginLeft: 50,
        borderRadius: 10,
    }
});

export default styles;