import {StyleSheet} from 'react-native';
import {colors} from '../../common/constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: 8,
    padding: 8,
    backgroundColor: colors.button,
    alignSelf: 'baseline',
  },
  btnRipple: {
    color: colors.light_blue,
    borderless: true,
  },
});

export {styles};
