import React from "react";
import {StyleSheet, Text, View} from "react-native";


export interface Props {

}

export interface State {

}


class CardNew extends React.Component<Props, State> {
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

export default CardNew;
