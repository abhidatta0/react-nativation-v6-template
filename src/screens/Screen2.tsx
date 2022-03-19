import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const Screen2=  ()=>{
    return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})

export default Screen2;