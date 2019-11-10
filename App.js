import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppContainer from './navigator/MyNavigator';

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
