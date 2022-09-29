import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 40,
  },
  plus: {
    alignSelf: 'center',
    marginTop: 10,
  },
  todoItem: {
    marginTop: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    borderRadius: 0,
    borderWidth: 1,
  },
});

export {styles};
