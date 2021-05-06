import React, { Component } from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Mission from './screens/Mission';

export default class App extends Component {
  render() {
    return (
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Mission" component={Mission}/>

        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}
