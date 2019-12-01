
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
import Header from "./app/components/Header";
import CardNew from "./app/components/CardNew";
const App = () => {
  return (
    <>

    <Header title={"hacker news"}/>
    <ScrollView>
      <CardNew/>

    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
