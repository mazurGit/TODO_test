import React, {FC} from 'react';
import {useNavigation} from '../../hooks/hooks';
import {RootNavigationProps} from '../../common/types/types';
import {useAppSelector} from '../../hooks/hooks';
import {RootScreenName} from '../../common/enums/enums';
import {PlusIcon, FlatList} from '../../components/components';
import {ListItem} from './components/components';
import {styles} from './styles';
import {selectItems} from '../../store/selectors';

const TodoList: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const onAddPress = () => {
    navigation.navigate(RootScreenName.ADD_ITEM);
  };
  const todoItems = useAppSelector(selectItems);
  return (
    <>
      {todoItems && (
        <>
          <FlatList
            data={todoItems}
            renderItem={({item}) => (
              <ListItem item={item} contentContainerStyle={styles.todoItem} />
            )}
          />
          <PlusIcon size={40} style={styles.plus} onPress={onAddPress} />
        </>
      )}
    </>
  );
};

export {TodoList};
