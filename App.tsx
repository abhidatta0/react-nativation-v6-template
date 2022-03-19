import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

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

const App = () => {
  
  return (
    <HomeScreen />     
  );
};

export default App;
