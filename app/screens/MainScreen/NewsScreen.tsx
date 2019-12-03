import React, {Component} from 'react'
import CardNew from "../../components/CardNew";
import Header from "../../components/Header";
import {ScrollView} from "react-native";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getNews} from "../../containers/getNews/action";

export interface Props {
    getDataAction: Function
}

export interface State {
}


class NewsScreen extends Component<Props, State> {


    componentDidMount() {
        this.props.getDataAction().then((success: any) => {
            this.setState({ info: success })
        })
    }


    render(): JSX.Element {
        return (
            <>
                <Header title={"hacker news"}/>
                <ScrollView>
                <CardNew/>
                </ScrollView>
            </>
        )
    }
}

const mapStateToProps = function (state:any) {
    console.log("STAAAAAAAAAAAAAAAAAAAAAAAAAAATE",state);
    return {
        res: state.data.news

    }
};

const mapDispatchToProps = (dispatch:any) => ({
    getDataAction: bindActionCreators(getNews, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsScreen);
