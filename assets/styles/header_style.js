import {Dimensions, StyleSheet} from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#000000',
        width,
        height: 80
    },
    titleContainer:{
        position: 'absolute',
        width: 159,
        height: 31,
        marginTop: 8,
        marginLeft: 12,
        flexWrap: 'wrap'
    },
    titleText: {
        fontFamily: 'FiraCode-Bold',
        color: "#ffffff",
        fontSize: 24,
        lineHeight: 31
    },
    menuContainer:{
        height: 19,
        marginTop: 53,
        marginLeft: 12,
    },
    titleMenu:{
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 19,
        color: '#ffffff',
        marginRight: 25
    }
});

export default styles;
