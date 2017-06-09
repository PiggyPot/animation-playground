import React, { Component } from 'react';
import Animation from 'lottie-react-native';

export default class LOTBouncingSign extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Animation
        ref={animation => { this.animation = animation; }}
        style={{
          width: 250,
          height: 250,
        }}
        source={require('./data.json')}
        loop={false}
        speed={1}
      />
    );
  }
}
