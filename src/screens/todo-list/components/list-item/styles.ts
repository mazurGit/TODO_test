import {StyleSheet} from 'react-native';
import {colors} from '../../../../common/constants/colors';

const createStyles = (done: boolean) => {
  return StyleSheet.create({
    wrapper: {
      width: '100%',
      backgroundColor: done ? colors.green : colors.white,
      flexDirection: 'row',
      borderRadius: 15,
      padding: 7,
      justifyContent: 'space-between',
    },
    checkIcon: {
      alignSelf: 'center',
      width: '8%',
    },
    textSection: {
      flex: 0.9,
      justifyContent: 'space-between',
    },
    title: {
      textDecorationLine: done ? 'line-through' : 'none',
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
      width: 70,
      height: 70,
      borderRadius: 50,
      alignSelf: 'center',
      resizeMode: 'contain',
    },
  });
};

export {createStyles};
