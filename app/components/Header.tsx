import React from "react";
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View, Platform} from "react-native";
import styles from "../../assets/styles/header_style";


export interface Props {
    title: string
}

export interface State {

}

class Header extends React.Component<Props, State> {


    render(): JSX.Element {

        const {headerContainer, titleContainer, titleText, menuContainer, titleMenu} = styles;

        return (
            <SafeAreaView style={{
                backgroundColor: "#000000",
                paddingTop: Platform.OS === 'android' ? 25 : 0}}>
            <View style={headerContainer}>
                <View style={titleContainer}>
                    <Text style={titleText}>{this.props.title}</Text>
                    <Text style={titleText}>{this.props.title}</Text>
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
                    <View></View>
                </View>
            </View>
            </SafeAreaView>
                )
    }
}


export default Header;
