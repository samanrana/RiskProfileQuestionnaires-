import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },

  statusText: {
    fontSize: wp('5%'),
    color: colors.white,
    backgroundColor: colors.primary,
    padding: wp('2%'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsText: {
    fontSize: wp('5%'),
    color: colors.white,
    backgroundColor: colors.primary,
    padding: wp('2%'),
    borderRadius: 10,
  },

  scoreText: {
    fontSize: wp('5%'),
    textAlign: 'center',
    marginBottom: wp('5%'),
  },

  boldRedFont: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: wp('6.5%'),
  },
  responseImage: {
    width: wp('90%'),
    height: wp('90%'),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
export default styles;
