/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import Main from './app/main.js'
import styles from './style/ios.js';

const {
  AppRegistry,
  NavigatorIOS,
} = React;

class FirstNativeDemo extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'React Native Demo',
          component: Main,
        }}/>
    );
  }
};

AppRegistry.registerComponent('FirstNativeDemo', () => FirstNativeDemo);
