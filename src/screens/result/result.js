import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import MainStyling from '../../assets/styles/MainStyling';
import styles from './styles';

const resultScreen = ({route}) => {
  const {result} = route.params;
  return (
    <SafeAreaView style={[MainStyling.mainContainer]}>
      <View style={MainStyling.divider} />
      <View style={MainStyling.divider} />

      <Image
        style={styles.responseImage}
        source={
          result?.category === 'High'
            ? require('./../../assets/images/high.jpeg')
            : require('./../../assets/images/low.jpeg')
        }
      />
      <View style={MainStyling.divider} />

      <View style={MainStyling.screenPadding}>
        <Text style={[styles.scoreText, styles.boldText]}>
          Your risk profile Score:
          <Text style={[styles.scoreText, styles.boldRedFont]}>
            {result?.score}
          </Text>
        </Text>
        <Text style={styles.scoreText}>
          Risk profile category:
          <Text style={[styles.scoreText, styles.boldRedFont]}>
            {' '}
            {result?.category}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default resultScreen;
