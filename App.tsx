import React, {useState} from 'react';
import { 
  View,
  Text,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = ()=>{
  const [enthusiasmlevel, setEnthusiasmlevel] = useState(1);
  
  const increment = ()=> setEnthusiasmlevel(enthusiasmlevel +1);
  const decrement = ()=> setEnthusiasmlevel(enthusiasmlevel -1);

  const getExclamationMarks = (numChars: number)=> numChars > 0 ? Array(numChars+1).join('!') : '';

  return (
    <View>
      <Text>Hello
        {getExclamationMarks(enthusiasmlevel)}
      </Text>
      <View>
        <Button title="Increase Enthusiasm" onPress={increment} color="blue" />
        <Button title="Decrease Enthusiasm" onPress={decrement} color="red" />
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
