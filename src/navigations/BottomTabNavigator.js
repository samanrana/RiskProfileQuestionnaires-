import React from 'react';
import {Platform, View, Pressable, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SettingsNavigator from './SettingsNavigator';
import HomeNavigator from './HomeNavigator';
import colors from '../assets/colors/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MainStyling from '../assets/styles/MainStyling';

const Tab = createBottomTabNavigator();

function BottomTabNavigator({route}) {
  const getIcons = (route, focused) => {
    if (route.name === 'Dashboard') {
      return (
        <MaterialCommunityIcons
          name="head-question"
          size={wp('9%')}
          color={focused ? colors.white : colors.light_color}
        />
      );
    } else if (route.name === 'Profile') {
      return (
        <FontAwesome
          name="user-circle-o"
          size={wp('8.5%')}
          color={focused ? colors.white : colors.light_color}
        />
      );
    }
  };
  return (
    <Tab.Navigator
      initialRouteName={'Dashboard' || ''}
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      safeAreaInsets={{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      tabBar={({state, navigation}) => {
        return (
          <View
            style={{
              backgroundColor: colors.primary,
              flexDirection: 'row',
              paddingHorizontal: Platform.OS === 'android' ? 17 : 15,
              paddingVertical: Platform.OS === 'android' ? 10 : 18,
              justifyContent: 'space-between',
            }}>
            {state?.routes?.map((route, index) => {
              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate({
                    name: route.name,
                    merge: true,
                    ...route.params,
                  });
                }
              };

              return (
                <Pressable
                  key={index}
                  onPress={onPress}
                  style={{
                    width: wp('16%'),
                    height: wp('15%'),
                    borderRadius: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {getIcons(route, isFocused)}
                  <Text
                    style={[
                      MainStyling.miniText,
                      {
                        color: isFocused ? colors.white : colors.light_color,
                        marginBottom: wp('2%'),
                      },
                    ]}>
                    {route.name}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        );
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Dashboard',
          title: '',
          headerShown: false,
        }}
        name="Dashboard"
        component={HomeNavigator}
      />
      <Tab.Screen
        name={'Profile'}
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Profile',
          title: '',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
