import React from 'react-native';
import styles from './style/ios.js';

const { View } = React;

class Separator extends React.Component{
  render(){
    return (
      <View style={styles.separator} />
    );
  }
};

export default Separator;