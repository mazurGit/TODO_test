import React, {FC} from 'react';
import {
  useNavigation,
  useEffect,
  useAppDispatch,
  useAppSelector,
} from '../../hooks/hooks';
import {RootNavigationProps} from '../../common/types/types';
import {RootScreenName} from '../../common/enums/enums';
import {PlusIcon, FlatList} from '../../components/components';
import {ListItem, FilterSection} from './components/components';
import {styles} from './styles';
import {selectFilteredItems} from '../../store/selectors';
import {colors} from '../../common/constants/colors';
import {setSearchValue} from '../../store/filter/action';

const TodoList: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerBackVisible: true,
      headerStyle: {backgroundColor: colors.gray},
      headerSearchBarOptions: {
        onChangeText: ({nativeEvent: {text}}) => dispatch(setSearchValue(text)),
      },
    });
  }, []);
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
