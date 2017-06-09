import React, { Component } from 'react';
import Animation from 'lottie-react-native';

export default class LOTSpinner extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Animation
        ref={animation => { this.animation = animation; }}
        style={{
          width: 100,
          height: 100,
        }}
        source={require('./data.json')}
        loop={true}
      />
    );
  }
}
