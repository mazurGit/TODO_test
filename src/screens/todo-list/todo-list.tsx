import React, {FC} from 'react';
import {useNavigation} from '../../hooks/hooks';
import {RootNavigationProps} from '../../common/types/types';
import {RootScreenName} from '../../common/enums/enums';
import {View, PlusIcon} from '../../components/components';
import {ListItem} from './components/components';
import {styles} from './styles';

const TodoList: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const onAddPress = () => {
    navigation.navigate(RootScreenName.ADD_ITEM);
  };
  return (
    <View>
      <ListItem title="TODO" description="description" />
      <PlusIcon size={40} style={styles.plus} onPress={onAddPress} />
    </View>
  );
};

export {TodoList};
