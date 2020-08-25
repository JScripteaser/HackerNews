import React from "react";
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
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
            <View style={headerContainer}>
                <View style={titleContainer}>
                    <Text style={titleText}>{this.props.title}</Text>
                    <Text></Text>
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


export default Header;
