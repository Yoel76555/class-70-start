import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer} from 'react-navigation'; 
import { createBottomTabNavigator} from 'react-navigation-tabs';

// You can import from local files
import TransactionScreen from './screens/Booktransaction';
import SearchScreen from './screens/SearchScreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer/>
      </View>
    )
  }
}
const TabNavigator= createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen: SearchScreen}})

const Appcontainer = createAppContainer(TabNavigator)