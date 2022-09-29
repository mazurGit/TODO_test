import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../common/constants/colors';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    minHeight: height * 0.4,
    borderRadius: 15,
    backgroundColor: colors.white,
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  pictureWrapper: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.dim_gray,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.dim_gray,
  },
  description: {
    minHeight: 100,
    textAlignVertical: 'top',
    alignItems: 'flex-start',
  },
  createBtn: {
    alignSelf: 'center',
    marginTop: 10,
  },
  error: {
    color: colors.red,
    fontSize: 14,
    textAlign: 'center',
  },
});

export {styles};
