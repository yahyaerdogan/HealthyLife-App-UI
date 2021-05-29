import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default class Support extends Component {
  render() {
    return (
      <View>
        <View style={{flex:1, flexDirection:"row"}}>
          <Image source={this.props.image} />
        </View>
        <View style={{flex:5, margin:15}}>
          <Text style={{fontSize:20, fontWeight:"bold", letterSpacing:-0.5, color:"#2d2d2d"}}>
            {this.props.title}
          </Text>
          <Text style={{fontSize:15, color:"#bec4c9"}}>
            {this.props.subtitle}
          </Text>
        </View>
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
          <TouchableOpacity>
            <Image source={require("../assets/rightbutton.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
