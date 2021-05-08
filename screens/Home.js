import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import Day from './Day'
export default class Home extends Component {
    state = {
        color: "darkslategray",
        activestate: "rgba(255, 255, 255, 0.291821)"
    }
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
                        <ImageBackground source={require("../assets/graphone.png")} style={{ width: 360, height: "100%" }} />
                    </View>
                    <View style={styles.boxfour}>
                        <Day dayname="Sun" />
                        <Day dayname="Mon" />
                        <Day dayname="Tue" />
                        <Day dayname="Wed" />
                        <Day dayname="Thu" active={this.state.activestate} />
                        <Day dayname="Fri" />
                        <Day dayname="Sat" />

                    </View>
                </View>
                <View style={styles.containertwo}>
                    <View style={styles.line} ></View>
                    <View style={styles.progress} >
                        <Text style={styles.textone}>My progress</Text>
                    </View>
                    <View style={styles.cards}>

                    </View>

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
        flex: 1.5,
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
        marginHorizontal: 35,
    },

    boxthree: {
        flex: 2.5
    },
    boxfour: {
        flex: 0.5,
        color: "#fff",
        flexDirection: "row",
    },
    name: {
        fontSize: 35,
        color: "#fff",
        fontWeight: "bold",
        letterSpacing: -0.5,
        marginTop: 5,
    },
    subtitle: {
        fontSize: 20,
        color: "#fff",
    },
    line:{
        width:66,
        height:4,
        backgroundColor:"#f4f0f0",
        borderRadius:2,
        marginVertical:25,
        left:150
    },
    progress:{
        left:50
    },
    textone:{
        fontsize:20,
        color:"#2d2d2d",
        letterSpacing:-0.5
    },
    cards:{
        flex:1,
        marginTop:10,
        marginHorizontal:30
    }
})
