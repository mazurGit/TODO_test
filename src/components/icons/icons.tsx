import React, {FC} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {IconProps} from 'react-native-vector-icons/Icon';

const size = 25;

type Props = Omit<IconProps, 'name'>;

const CheckIcon: FC<Props> = props => {
  return <FeatherIcon name="check-circle" size={size} {...props} />;
};

const CircleIcon: FC<Props> = props => {
  return <FeatherIcon name="circle" size={size} {...props} />;
};

const PlusIcon: FC<Props> = props => {
  return <FeatherIcon name="plus-circle" size={size} {...props} />;
};

export {CheckIcon, CircleIcon, PlusIcon};
