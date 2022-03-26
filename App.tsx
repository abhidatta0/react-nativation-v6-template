import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';

export type RootStackParamList = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
}

const Tab  = createMaterialBottomTabNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({
        //in order to centralize the icon configuration for convenience
        tabBarIcon:({focused, color})=>{
          let iconName;
          if(route.name === 'Home'){
            iconName = "home";
          }
          else if(route.name === 'Screen1'){
            iconName = "cog-sharp";
          }
          else{
            iconName = "person-circle-sharp";
          }
          return <BottomIcon name={iconName} color={color}/>
        },
        tabBarActiveTintColor: 'tomato', 
        tabBarInactiveTintColor:'gray'})}>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Screen1" component={Screen1} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Screen2" component={Screen2} />
      </Tab.Navigator>  
    </NavigationContainer>
  );
};

export default App;

type BottomIconType = {
  name: string;
  color: string;
}
const BottomIcon = ({name, color}:BottomIconType)=> <Ionicons name={name} color={color} size={25}/>;