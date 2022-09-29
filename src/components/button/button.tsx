import React, {FC} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {styles} from './styles';

type Props = {
  label: string;
  onPress: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const Button: FC<Props> = ({label, onPress, contentContainerStyle}) => {
  return (
    <View style={[styles.wrapper, contentContainerStyle]}>
      <Pressable android_ripple={styles.btnRipple} onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
};

export {Button};
