import React from "react";
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";

const {width, height} = Dimensions.get('window');


export interface Props {
    title: string
}

export interface State {

}

class Header extends React.Component<Props, State> {


    render(): JSX.Element {

        const {headerContainer, titleContainer, titleText, menuContainer, titleMenu} = styles;

        return (
            <View style={headerContainer}>
                <View style={titleContainer}>
                    <Text style={titleText}>{this.props.title}</Text>
                </View>
                <View style={menuContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Text style={titleMenu}>new</Text>
                        <Text style={titleMenu}>past</Text>
                        <Text style={titleMenu}>comments</Text>
                        <Text style={titleMenu}>ask</Text>
                        <Text style={titleMenu}>show</Text>
                        <Text style={titleMenu}>jobs</Text>
                        <Text style={titleMenu}>submit</Text>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

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
export default Header;
