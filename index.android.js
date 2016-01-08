/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import styles from './style/android.js';

const {
  AppRegistry,
  Text,
  View,
} = React;

class FirstNativeDemo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello, React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('FirstNativeDemo', () => FirstNativeDemo);
