import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home App" component={HomeScreen} options={{headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
