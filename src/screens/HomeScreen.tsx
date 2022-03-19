import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ()=>{
  const [enthusiasmlevel, setEnthusiasmlevel] = useState(1);
  
  const increment = ()=> setEnthusiasmlevel(enthusiasmlevel +1);
  const decrement = ()=> setEnthusiasmlevel(enthusiasmlevel -1);

  const getExclamationMarks = (numChars: number)=> numChars > 0 ? Array(numChars+1).join('!') : '';

  return (
    <View style={styles.container}>
      <Text>Hello
        {getExclamationMarks(enthusiasmlevel)}
      </Text>
      <View style={styles.buttons}>
        <Button title="Increase Enthusiasm" onPress={increment} color="blue" />
        <Button title="Decrease Enthusiasm" onPress={decrement} color="red" />
      </View>

      <View style={styles.touchables}>
        <TouchableOpacity style={[styles.screenButtons, {marginBottom: 10}]}>
          <Text>Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.screenButtons}>
          <Text>Screen 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons:{
    width: '50%',
  },
  touchables:{
    marginTop: 10,
  },
  screenButtons:{
    padding: 20,
    backgroundColor: 'lightblue'
  }
})
export default HomeScreen;