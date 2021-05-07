import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerone}>
                    <View style={styles.boxone}>

                    </View>
                    <View style={styles.boxtwo}>
                        <Text style={styles.name} >Hi, Yahya</Text>
                        <Text style={styles.subtitle} >Here is your health</Text>
                    </View>
                    <View style={styles.boxthree}>
                        <ImageBackground source={require("../assets/graphone.png")} style={{width:360, height:"100%"}}  />
                    </View>
                    <View style={styles.boxfour}>

                    </View>
                </View>
                <View style={styles.containertwo}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "darkslategray",
        flex: 1,
    },
    containerone: {
        flex: 1,
    },
    containertwo: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
    },
    boxone: {
        flex: 1,

    },
    boxtwo: {
        flex: 0.8,
        marginHorizontal:35,
    },
    
    boxthree:{
        flex:2.5
    },
    boxfour:{
        flex:0.5,
        color:"#fff",
        flexDirection:"row",
    },
    name:{
        fontSize:35,
        color:"#fff",
        fontWeight:"bold",
        letterSpacing: -0.5,
        marginTop:5,
    },
    subtitle:{
        fontSize:20,
        color:"#fff",
    }
})
