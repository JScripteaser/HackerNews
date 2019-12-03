import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerNew: {
        backgroundColor: '#ffffff',
        borderBottomColor: '#c2c2c2',
        borderBottomWidth: 1,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15
    },
    rateContainer: {
        width: 32,
        height: 42,
        position: 'absolute',
        marginTop: 17,
        justifyContent: 'center',
        marginLeft: 12,
    },
    rate: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        fontFamily: 'FiraSans',
        color: '#c2c2c2'
    },
    titleNewContainer: {
        width: 296,
        marginLeft: 52,
        marginTop: 17,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    titleNew: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'normal',
        fontFamily: 'FiraSans',
        fontStyle: 'normal'
    },
    sourceNew: {
        color: '#c2c2c2',
        fontFamily: 'FiraSans',
        fontSize: 16,
    },
    authorContainer: {
        marginLeft: 52,
        backgroundColor: '#ffffff',
        marginBottom: 16,
        marginTop: 8,
        width: 296
    },
    authorText: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'FiraSans',
    },
    datePost: {
        color: '#c2c2c2',
        lineHeight: 16,
        fontFamily: 'FiraSans',
        fontSize: 12,


    }
});

export default styles;
