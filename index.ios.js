import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import LOTSpinner from './src/components/lottie/spinner';
import LOTSwingingSign from './src/components/lottie/swinging-sign';
import LOTBouncingSign from './src/components/lottie/bouncing-sign';

export default class animation_playground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <LOTBouncingSign />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('animation_playground', () => animation_playground);
