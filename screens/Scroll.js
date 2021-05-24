import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import * as Animated from 'react-native-animatable';

export default class Scroll extends Component {
  render() {
    return (
      <Animated.View animation={this.props.animation} duration={1200}
        style={[styles.memo1, { backgroundColor: this.props.bgcolor }]} >

        <View style={styles.indsideone}>

          <Text style={{ fontSize: 20, color: "#fff", width: 100 }}>{this.props.title}</Text>

          <Text style={{ fontSize: 14, color: "#fff", marginVertical: 5 }}>{this.props.month}</Text>

        </View>
        <View style={styles.indsidetwo}>

          <ImageBackground source={this.props.background} style={{ width: 100, height: 100 }} />

        </View>

        <TouchableOpacity style={styles.indsidethree}>
          <Image source={require("../assets/i_icon.png")} />
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  memo1: {
    flex: 1,
    margin: 10,
    borderRadius: 18
  },
  indsideone: {
    flex: 1,
    padding: 10
  },
  indsidetwo: {
    flex: 2,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  indsidethree: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    margin: 10
  }
})