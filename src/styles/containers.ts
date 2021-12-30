
import { StyleSheet } from 'react-native';

const containers = StyleSheet.create({
    bodyScreen: {
        backgroundColor: '#F2F2F2',
        height: '100%',
        paddingLeft: 10,
    },
    bookDetailsContainer: {
        position: 'absolute',
        top: 84
    },
    bookImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 31,
        position: 'relative',
        zIndex: 999
    },
    detailHeaderContainer: {
        width: 600,
        height: 382,
        top: -80,
        backgroundColor: '#FFF6E5',
        borderRadius: 150,
        left: -200
    },
    searchInputContainer: {
        marginTop: 50,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -10
    },
    backButtonContainer: {
        position: 'absolute',
        zIndex: 9999,
        left: 33,
        top: 55
    },
    ballContainer: {
        width: 63,
        height: 63,
        backgroundColor: '#00173D',
        borderRadius: 500,
        position: 'absolute',
        zIndex: 88,
        left: 74,
        top: 115
    },
    littleBallContainer: {
        width: 15,
        height: 15,
        borderRadius: 500,
        backgroundColor: '#FF6978',
        left: 47,
        top: 125,
        position: 'absolute',
    },
    discoverBookBoxContainer: {
        width: 272,
        height: 139,
        borderRadius: 5,
        backgroundColor: '#00173D'
    },
    currentlyReadingBoxContainer: {
        width: 331,
        height: 100,
        borderRadius: 3,
        backgroundColor: '#EEF5DB',
        elevation: 1
    }
})


export default containers;