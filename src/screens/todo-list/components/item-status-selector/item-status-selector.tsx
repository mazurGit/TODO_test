import React, {FC} from 'react';
import {useMemo} from '../../../../hooks/hooks';
import {Text, TouchableOpacity} from '../../../../components/components';
import {StyleProp, ViewStyle} from 'react-native';
import {createStyles} from './styles';

type Props = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const ItemStatusSelector: FC<Props> = ({
  title,
  isSelected,
  contentContainerStyle,
  onPress,
}) => {
  const styles = useMemo(() => createStyles(isSelected), [isSelected]);
  return (
    <TouchableOpacity
      style={[styles.container, contentContainerStyle]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export {ItemStatusSelector};
