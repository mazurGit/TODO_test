import {StyleSheet} from 'react-native';
import {colors} from '../../../../common/constants/colors';

const createStyles = (done: boolean) => {
  return StyleSheet.create({
    wrapper: {
      width: '100%',
      backgroundColor: done ? colors.white : colors.green,
      flexDirection: 'row',
      borderRadius: 15,
      padding: 7,
      justifyContent: 'space-between',
    },
    checkIcon: {
      alignSelf: 'center',
      flex: 0.1,
    },
    textSection: {
      flex: 0.6,
      justifyContent: 'space-between',
    },
    title: {
      textDecorationLine: done ? 'none' : 'line-through',
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: '800',
    },
    description: {
      fontStyle: 'italic',
      marginVertical: 3,
    },
    date: {
      fontWeight: '700',
    },
    image: {
      flex: 0.25,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
  });
};

export {createStyles};
