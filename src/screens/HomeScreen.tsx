import React, {useState} from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props)=>{
  const [enthusiasmlevel, setEnthusiasmlevel] = useState(1);
  
  const increment = ()=> setEnthusiasmlevel(enthusiasmlevel +1);
  const decrement = ()=> setEnthusiasmlevel(enthusiasmlevel -1);

  const getExclamationMarks = (numChars: number)=> numChars > 0 ? Array(numChars+1).join('!') : '';
  
  const handleNavigation = (screenName: keyof RootStackParamList)=>{
    console.log(screenName);
    navigation.navigate(screenName);
  }
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
        <TouchableOpacity style={[styles.screenButtons, {marginBottom: 10}]} onPress={()=> handleNavigation('Screen1')}>
          <Text>Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.screenButtons} onPress={()=> handleNavigation('Screen2')}>
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