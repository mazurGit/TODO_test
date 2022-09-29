import {StyleSheet} from 'react-native';
import {colors} from '../../common/constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: 8,
    padding: 8,
    backgroundColor: colors.button,
    alignSelf: 'baseline',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  btnRipple: {
    color: colors.dim_gray,
    borderless: true,
  },
});

export {styles};
