import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import Interactable from 'react-native-interactable';

class NotebookDrawer extends Component {
  //Constructor
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
  }


  //Render Method
  render() {
    return (
      <Interactable.View
      style={[styles.interactable, ]}
      >

      </Interactable.View>
    )
  }

}

export default NotebookDrawer;

//StyleSheet
const styles = StyleSheet.create({
  interactable: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'lightgrey'
  }
});
