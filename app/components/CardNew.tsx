import React, { Component } from 'react'
import {StyleSheet, Text, View} from "react-native";
import styles from "../../assets/styles/card_new_style";

export interface Props {

}

export interface State {

}


class CardNew extends Component<Props, State> {
    render(): JSX.Element {
        const {containerNew, rateContainer, rate, titleNewContainer, titleNew, sourceNew, authorContainer, authorText, datePost} = styles;
        return (
            <View style={containerNew}>
                <View style={rateContainer}>
                    <Text style={rate}>256 ↑</Text>
                </View>
                <View style={titleNewContainer}>

                    <Text style={titleNew}>Tesla wants to use laser beams to automatically clean debris off cars <Text
                        style={sourceNew}>electrek.co</Text></Text>
                </View>
                <View style={authorContainer}>
                    <Text style={authorText}>+1 point <Text style={datePost}>by heshiebee 9 minutes ago</Text></Text>
                </View>
            </View>
        )
    }
}


export default CardNew;
