import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Scroll from './Scroll';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ width: "100%", height: "120%" }}>
                    <View style={styles.header}>
                        <Text style={styles.inline}>My Mission</Text>
                    </View>
                    <View style={styles.memos}>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={{ width: "200%" }}
                            showsVerticalScrollIndicator={false}
                        >
                            <Scroll bgcolor="#ffbe86"
                                background={require("../assets/graphtwo.png")}
                                title="Game Of Chess"
                                month="Sep - Nov"
                                animation="bounceInLeft"
                            />
                            <Scroll bgcolor="#7dc9e7"
                                background={require("../assets/graphtwo.png")}
                                title="100 km Jogging"
                                month="Sep - Nov"
                                animation="bounceInLeft"
                            />
                            <Scroll bgcolor="#ffbe86"
                                background={require("../assets/graphtwo.png")}
                                title="Netflix and Chill"
                                month="Sep - Nov"
                                
                            />
                            <Scroll bgcolor="#7dc9e7"
                                background={require("../assets/graphtwo.png")}
                                title="Video Games"
                                month="Sep - Nov"
                                
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        flex: 1,
        left: 25,
        top: 100
    },
    inline: {
        fontSize: 38,
        letterSpacing: -0.5,
        fontWeight: "bold",
        color: "#2E2E2E"
    },
    memos: {
        height: 250,
        position: "absolute",
        width: "100%",
        top: 160,
        marginLeft: 10

    }
})
