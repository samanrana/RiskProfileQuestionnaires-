import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import questions from '../screens/questions/questions';
import resultScreen from '../screens/result/result';

const Stack = createStackNavigator();

function HomeNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'questions'}>
      <Stack.Screen name={'questions'} component={questions} />
      <Stack.Screen name={'resultScreen'} component={resultScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
