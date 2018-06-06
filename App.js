/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux'
import store from './store'
import AppNavigation from './src/navigation'

// import './src/global'


export default class App extends Component {
  render() {
    console.log('render')
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
