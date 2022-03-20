import React from 'react';
import { StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1Nested1 from './Screen1Nested1';
import Screen1Nested2 from './Screen1Nested2';

export type Stack1ParamList = {
  Screen1Nested1: undefined,
  Screen1Nested2: undefined,
}

const Screen1Stack = createNativeStackNavigator<Stack1ParamList>();

const Screen1 = ()=>{
    return (
      <Screen1Stack.Navigator initialRouteName='Screen1Nested1'>
        <Screen1Stack.Screen name="Screen1Nested1" component={Screen1Nested1} />
        <Screen1Stack.Screen name="Screen1Nested2" component={Screen1Nested2} />
      </Screen1Stack.Navigator>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Screen1;