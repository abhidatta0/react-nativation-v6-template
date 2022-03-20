import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import type {NativeStackScreenProps}  from  '@react-navigation/native-stack';
import {Stack1ParamList} from './Screen1';

type Props = NativeStackScreenProps<Stack1ParamList,'Screen1Nested1'>;

const Screen1Nested1 = ({navigation}:Props)=>{
    const handleNavigation = (screenName: keyof Stack1ParamList)=>{
       navigation.navigate(screenName);
    }
    return (
        <View style={styles.container}>
            <Text>In Screen1Nested1</Text>
            <Button title='Go to Nested2 of Screen1' onPress={()=>handleNavigation('Screen1Nested2')} />
        </View>
    )
}

export default Screen1Nested1;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
})