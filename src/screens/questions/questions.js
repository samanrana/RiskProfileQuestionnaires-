import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import MainStyling from '../../assets/styles/MainStyling';
import styles from './styles';
import colors from '../../assets/colors/colors';
import Button from '../../components/Button';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const questions = [
  {
    id: 1,
    title: 'What is your primary investment goal?',
    options: [
      {text: 'Capital Preservation', score: 10},
      {text: 'Income', score: 20},
      {text: 'Growth', score: 30},
      {text: 'Speculation', score: 40},
    ],
  },
  {
    id: 2,
    title: 'How long do you plan to invest your money?',
    options: [
      {text: 'Less than 1 year', score: 10},
      {text: '1-3 years', score: 20},
      {text: '3-5 years', score: 30},
      {text: 'More than 5 years', score: 40},
    ],
  },
  {
    id: 3,
    title: 'How would you react to a 20% drop in your investment value?',
    options: [
      {text: 'Sell all investments', score: 10},
      {text: 'Sell some investments', score: 20},
      {text: 'Do nothing', score: 30},
      {text: 'Buy more investments', score: 40},
    ],
  },
  {
    id: 4,
    title: 'What is your age group?',
    options: [
      {text: 'Below 30', score: 10},
      {text: '30-45', score: 20},
      {text: '45-60', score: 30},
      {text: 'Above 60', score: 40},
    ],
  },
  {
    id: 5,
    title:
      'What percentage of your total assets will this investment represent?',
    options: [
      {text: 'Less than 10%', score: 10},
      {text: '10%-25%', score: 20},
      {text: '25%-50%', score: 30},
      {text: 'More than 50%', score: 40},
    ],
  },
  {
    id: 6,
    title: 'How much risk are you willing to take to achieve higher returns?',
    options: [
      {text: 'None', score: 10},
      {text: 'Low', score: 20},
      {text: 'Moderate', score: 30},
      {text: 'High', score: 40},
    ],
  },
  {
    id: 7,
    title: 'What is your annual income range?',
    options: [
      {text: 'Below $20,000', score: 10},
      {text: '$20,000-$50,000', score: 20},
      {text: '$50,000-$100,000', score: 30},
      {text: 'Above $100,000', score: 40},
    ],
  },
  {
    id: 8,
    title: 'What type of investments are you most comfortable with?',
    options: [
      {text: 'Savings accounts', score: 10},
      {text: 'Bonds', score: 20},
      {text: 'Stocks', score: 30},
      {text: 'Cryptocurrency', score: 40},
    ],
  },
  {
    id: 9,
    title: 'How frequently do you plan to monitor your investments?',
    options: [
      {text: 'Daily', score: 10},
      {text: 'Weekly', score: 20},
      {text: 'Monthly', score: 30},
      {text: 'Quarterly', score: 40},
    ],
  },
  {
    id: 10,
    title:
      'What is your preferred level of involvement in managing your investments?',
    options: [
      {text: 'None', score: 10},
      {text: 'Minimal', score: 20},
      {text: 'Moderate', score: 30},
      {text: 'Active', score: 40},
    ],
  },
];

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const navigation = useNavigation();

  const handleOptionPress = (optionIndex, optionScore) => {
    setSelectedOptionIndex(optionIndex);
    setScore(prevScore => prevScore + optionScore);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptionIndex(null);
      } else {
        setShowScore(true);
        const category = getScoreCategory();
      }
    }, 500);
  };

  const saveScoreAndCategory = async (score, category) => {
    try {
      await AsyncStorage.setItem('quizScore', score.toString());
      await AsyncStorage.setItem('quizCategory', category);
    } catch (error) {
      console.error('Error saving score and category', error);
    }
  };

  const getScoreCategory = () => {
    const maxScore = questions.reduce(
      (total, question) =>
        total + Math.max(...question.options.map(option => option.score)),
      0,
    );
    const percentage = (score / maxScore) * 100;
    if (percentage < 30) return 'Low';
    if (percentage < 60) return 'Medium';
    return 'High';
  };

  if (showScore) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.scoreCard}>
          <View style={MainStyling.divider} />
          <Image
            style={styles.doneImageStyle}
            source={require('./../../assets/images/complete.png')}
          />
          <View style={MainStyling.divider} />

          <View style={styles.buttonView}>
            <Button
              outerStyle={{marginHorizontal: wp('1%')}}
              variant="outline"
              label={'Start Quiz'}
              labelStyle={[MainStyling.buttonText]}
              onPress={() => {
                setScore(0);
                setCurrentQuestionIndex(0);
                setShowScore(false);
                setSelectedOptionIndex(null);
              }}
            />
            <Button
              outerStyle={{marginHorizontal: wp('1%')}}
              label={'View Result '}
              labelStyle={[MainStyling.buttonText]}
              onPress={() => {
                saveScoreAndCategory(score, getScoreCategory());
                navigation.navigate('resultScreen', {
                  result: {
                    category: getScoreCategory(),
                    score: score,
                  },
                });
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const question = questions[currentQuestionIndex];

  return (
    <SafeAreaView style={[MainStyling.mainContainer]}>
      <View style={MainStyling.divider} />
      <Image
        style={styles.imageStyle}
        source={require('./../../assets/images/quizImage.png')}
      />
      <View style={MainStyling.divider} />

      <View style={MainStyling.screenPadding}>
        <Text style={MainStyling.heading}>{question.title}</Text>
        <View style={MainStyling.dividerTwo} />
        <FlatList
          data={question.options}
          renderItem={({item, index}) => {
            let backgroundColor = '#ddd';
            if (selectedOptionIndex === index) {
              backgroundColor = colors.primary;
            }
            let color = 'black';
            if (selectedOptionIndex === index) {
              color = 'white';
            }

            return (
              <TouchableOpacity
                style={[styles.optionButton, {backgroundColor}]}
                onPress={() => handleOptionPress(index, item.score)}
                disabled={selectedOptionIndex !== null}>
                <Text style={[styles.optionText, {color}]}>{item.text}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;
