import React from 'react-native';
import styles from './style/ios.js';

const {
  View,
  WebView
} = React;

class Web extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url}/>
      </View>
    );
  }
};

Web.propTypes = {
 url: React.PropTypes.string.isRequired
};

export default Web;