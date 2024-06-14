import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();

function SettingsNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Profile'}>
      <Stack.Screen name={'Profile'} component={Profile} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
