import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    flex: 0.45,
  },

  text: {
    color: colors.primary,
  },

  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: wp('10%'),
  },

  imageStyle: {
    width: wp('90%'),
    height: wp('90%'),
    resizeMode: 'contain',
  },
});
export default styles;
