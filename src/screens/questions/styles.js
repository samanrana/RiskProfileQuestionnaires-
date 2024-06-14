import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: wp('5%'),
    justifyContent: 'center',
    // marginVertical: wp('5%'),
    backgroundColor: colors.white,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp('5%'),
  },
  profileImage: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('10%'),
  },
  profileTextContainer: {
    marginLeft: wp('5%'),
  },
  profileName: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  profileDetails: {
    fontSize: wp('4%'),
    color: 'gray',
  },
  scoreCard: {
    backgroundColor: 'white',
    padding: wp('5%'),
    borderRadius: wp('3%'),
    elevation: 3,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  questionText: {
    fontSize: wp('6%'),
    marginBottom: wp('5%'),
  },
  optionButton: {
    padding: wp('4%'),
    marginVertical: wp('2%'),
    borderRadius: 10,
  },
  optionText: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: wp('5%'),
    textAlign: 'center',
    marginBottom: wp('5%'),
  },
  button: {
    backgroundColor: '#28a745',
    padding: wp('4%'),
    marginTop: wp('5%'),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: wp('4.5%'),
    color: '#fff',
    textAlign: 'center',
  },
  boldRedFont: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: wp('6.5%'),
  },
  imageStyle: {
    width: wp('90%'),
    height: wp('50%'),
    resizeMode: 'center',
    alignSelf: 'center',
  },
  doneImageStyle: {
    width: wp('70%'),
    height: wp('70%'),
    alignSelf: 'center',
  },
  buttonView: {
    flexDirection: 'row',
  },
});
export default styles;
