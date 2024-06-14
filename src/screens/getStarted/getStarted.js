import React from 'react';
import {View, Text, Image, SafeAreaView, StatusBar} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';
import MainStyling from '../../assets/styles/MainStyling';
import styles from './styles';

const getStarted = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[MainStyling.mainContainer]}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          source={require('./../../assets/images/brain.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={[styles.subContainer, MainStyling.screenPadding]}>
        <Text style={[MainStyling?.mediumText, MainStyling.textCenter]}>
          Take a quick quiz to uncover your investment preferences and get a
          personalized risk profile score. Optimize your investment strategy
          with insights derived from your responses{' '}
        </Text>
        <View style={styles.buttonView}>
          <Button
            label={'Start Quiz'}
            labelStyle={[MainStyling.buttonText]}
            onPress={() => {
              navigation.navigate('Home', {
                // navRoute: 'register',
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default getStarted;
