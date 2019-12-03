import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Provider } from 'react-redux'
// import Header from "./app/components/Header";
// import CardNew from "./app/components/CardNew";
import NewsScreen from "./app/screens/MainScreen/NewsScreen";
import {store} from "./app/store/configureStore"

const App = () => {
    return (
        <Provider store={store}>
            <NewsScreen/>
        </Provider>
    );
};


export default App;
