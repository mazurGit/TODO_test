import {StyleSheet} from 'react-native';
import {colors} from '../../../../common/constants/colors';

const createStyles = (isSelected: boolean) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '33%',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 2,
      backgroundColor: isSelected ? colors.green : colors.gray,
    },
    text: {
      fontSize: 18,
      lineHeight: 35,
      fontWeight: '600',
    },
  });
};
export {createStyles};
