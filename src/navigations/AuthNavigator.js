import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import getStarted from '../screens/getStarted/getStarted';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={'getStarted'}>
      <Stack.Screen
        options={{headerShown: false}}
        name={'getStarted'}
        component={getStarted}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'Home'}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
