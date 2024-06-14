import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../colors/colors';

const MainStyling = StyleSheet.create({
  Navbar: {
    fontSize: wp('5.3%'),
    fontWeight: '600',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleHeading: {
    fontSize: wp('6.6%'),
    color: colors.black,
    fontWeight: '600',
  },
  heading: {
    fontSize: wp('5.7%'),
    color: colors.black,
    fontWeight: '600',
  },
  buttonText: {
    fontSize: wp('4.3%'),
  },

  subHeading: {
    fontSize: wp('5%'),
    color: colors.black,
  },
  mediumText: {
    fontSize: wp('4.5%'),
    color: colors.black,
  },

  label: {
    fontSize: wp('3.2%'),
    color: colors.black,
    fontWeight: '600',
  },
  miniText: {
    fontSize: wp('2.5%'),
    color: colors.black,
  },
  divider: {
    minHeight: wp('6.8%'),
  },
  dividerTwo: {
    minHeight: wp('2.8%'),
  },

  screenPadding: {
    paddingHorizontal: wp('6%'),
  },
  screenPaddingTwo: {
    paddingHorizontal: wp('5%'),
  },
  alignmentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flxDirection: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  shadows: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 4,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default MainStyling;
