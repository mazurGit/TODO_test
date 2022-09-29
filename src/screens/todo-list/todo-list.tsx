import React, {FC} from 'react';
import {useNavigation} from '../../hooks/hooks';
import {RootNavigationProps} from '../../common/types/types';
import {useAppSelector} from '../../hooks/hooks';
import {RootScreenName} from '../../common/enums/enums';
import {PlusIcon, FlatList} from '../../components/components';
import {ListItem, FilterSection} from './components/components';
import {styles} from './styles';
import {selectFilteredItems} from '../../store/selectors';

const TodoList: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const onAddPress = () => {
    navigation.navigate(RootScreenName.ADD_ITEM);
  };
  const todoItems = useAppSelector(selectFilteredItems);
  return (
    <>
      {todoItems && (
        <>
          <FilterSection />
          <FlatList
            data={todoItems}
            renderItem={({item}) => (
              <ListItem item={item} contentContainerStyle={styles.todoItem} />
            )}
            ListFooterComponent={
              <PlusIcon size={40} style={styles.plus} onPress={onAddPress} />
            }
          />
        </>
      )}
    </>
  );
};

export {TodoList};
