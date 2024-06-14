import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MainStyling from '../../assets/styles/MainStyling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import colors from '../../assets/colors/colors';

const Profile = () => {
  const [score, setScore] = useState(null);
  const [category, setCategory] = useState('');

  const fetchScoreAndCategory = async () => {
    try {
      const savedScore = await AsyncStorage.getItem('quizScore');
      const savedCategory = await AsyncStorage.getItem('quizCategory');
      if (savedScore !== null && savedCategory !== null) {
        setScore(parseInt(savedScore));
        setCategory(savedCategory);
      }
    } catch (error) {
      console.error('Error fetching score and category', error);
    }
  };

  // useEffect to fetch data on initial load
  useFocusEffect(
    React.useCallback(() => {
      fetchScoreAndCategory();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('./../../assets/images/user.png')}
      />
      <View style={styles.card}>
        <Text style={styles.cardContent}>Saman Rana</Text>
        <Text style={MainStyling?.subHeading}>samanranaw1@gmail.com</Text>
      </View>
      <View style={MainStyling.divider} />
      <View style={styles.cardContainer}>
        <View style={styles.smallCard}>
          <Text style={styles.cardTitle}>Category</Text>
          <Text style={styles.cardContent}>{category}</Text>
        </View>
        <View style={styles.smallCard}>
          <Text style={styles.cardTitle}>Score</Text>
          <Text style={styles.cardContent}>{score}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  profileImage: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('15%'),
    marginBottom: wp('10%'),
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('80%'),
  },
  smallCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: wp('5%'),
    alignItems: 'center',
    width: wp('35%'),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: wp('5%'),
    width: wp('75%'),
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: wp('4%'),
    color: 'gray',
    marginBottom: wp('2%'),
  },
  cardContent: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
  },
});

export default Profile;
